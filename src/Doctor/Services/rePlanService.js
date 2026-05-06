import axios from "axios";

const API_URL = "YOUR_API_URL_HERE";
const USE_MOCK = true;

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

/* =========================
   GET ALL PLANS
========================= */
export const getRetreatmentPlans = async () => {
  if (USE_MOCK) {
    await wait(500);

    try {
      const stored = localStorage.getItem("replans");
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      localStorage.removeItem("replans");
      return [];
    }
  }

  const res = await axios.get(`${API_URL}/treatment-plans`);
  return Array.isArray(res.data) ? res.data : [];
};

/* =========================
   CREATE PLAN
========================= */
export const createRetreatmentPlan = async (plan) => {
  if (USE_MOCK) {
    await wait(500);

    const newPlan = {
      id: Date.now(),
      status: plan.status,
      extraoral_photos: plan.extraoral_photos.map((p) => p.preview),
      intraoral_photos: plan.intraoral_photos.map((p) => p.preview),
      radiographs: plan.radiographs.map((p) => p.preview),
      videos: plan.videos.map((v) => v.preview),
    };

    const existing = JSON.parse(localStorage.getItem("replans") || "[]");

    localStorage.setItem(
      "replans",
      JSON.stringify([...existing, newPlan])
    );

    return newPlan;
  }

  const formData = new FormData();

  plan.extraoral_photos.forEach((p) => p.file && formData.append("extraoral_photos", p.file));
  plan.intraoral_photos.forEach((p) => p.file && formData.append("intraoral_photos", p.file));
  plan.radiographs.forEach((p) => p.file && formData.append("radiographs", p.file));
  plan.videos.forEach((v) => v.file && formData.append("videos", v.file));

  formData.append("status", plan.status);

  const res = await axios.post(`${API_URL}/treatment-plans`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

/* =========================
   UPDATE PLAN
========================= */
export const updateRetreatmentPlan = async (plan) => {
  if (USE_MOCK) {
    await wait(500);

    const existing = JSON.parse(localStorage.getItem("replans") || "[]");

    const updated = existing.map((p) =>
      p.id === plan.id
        ? {
            ...plan,
            extraoral_photos: plan.extraoral_photos.map((p) => p.preview || p),
            intraoral_photos: plan.intraoral_photos.map((p) => p.preview || p),
            radiographs: plan.radiographs.map((p) => p.preview || p),
            videos: plan.videos.map((v) => v.preview || v),
          }
        : p
    );

    localStorage.setItem("replans", JSON.stringify(updated));

    return plan;
  }

  const formData = new FormData();

  plan.extraoral_photos.forEach((p) => p.file && formData.append("extraoral_photos", p.file));
  plan.intraoral_photos.forEach((p) => p.file && formData.append("intraoral_photos", p.file));
  plan.radiographs.forEach((p) => p.file && formData.append("radiographs", p.file));
  plan.videos.forEach((v) => v.file && formData.append("videos", v.file));

  formData.append("status", plan.status);

  const res = await axios.put(`${API_URL}/treatment-plans/${plan.id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

/* =========================
   DELETE PLAN
========================= */
export const deleteRetreatmentPlan = async (planId) => {
  if (USE_MOCK){
    await wait(500);

    const existing = JSON.parse(localStorage.getItem("replans") || "[]");
    const updated = existing.filter((p) => p.id !== planId);
    localStorage.setItem("replans",JSON.stringify(updated));
  }

}