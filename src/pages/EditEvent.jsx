import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEventStore } from "../store/eventStore";

export const EditEvent = () => {
  const { eventId } = useParams();
  const id = Number(eventId);
  const navigate = useNavigate();

  const { events, updateEventById } = useEventStore();
  const existing = events.find((e) => e.id === id);

  const [form, setForm] = useState({
    titre: "",
    date_debut: "",
    date_fin: "",
    heure: "",
    type_evenement: "",
    lieu: "",
    tarifs: "",
    image: "",
    description: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log
    if (existing) {
      setForm({
        titre: existing.titre || "",
        date_debut: existing.date_debut || "",
        date_fin: existing.date_fin || "",
        heure: existing.heure || "",
        type_evenement: existing.type_evenement || "",
        lieu: existing.lieu || "",
        tarifs: existing.tarifs || "",
        image: existing.image || "",
        description: existing.description || "",
      });
      setImagePreview(existing.image || "");
    }
  }, [existing]);

  const setImageFile = (file) => {
    if (imagePreview && imagePreview.startsWith && imagePreview.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(imagePreview);
      } catch {
        // ignore
      }
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setForm((s) => ({ ...s, image: file }));
      setImagePreview(url);
    } else {
      setForm((s) => ({ ...s, image: "" }));
      setImagePreview("");
    }
  };

  const handleFileButtonClick = () => fileInputRef.current?.click();

  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
      setImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleClearImage = () => {
    if (fileInputRef.current) fileInputRef.current.value = null;
    setImageFile(null);
  };

  const handleChange = (field) => (e) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm((s) => ({ ...s, [field]: value }));

    if (field === "image") {
      if (e.target.files && e.target.files[0]) {
        const url = URL.createObjectURL(e.target.files[0]);
        setImagePreview(url);
      } else {
        setImagePreview(e.target.value || "");
      }
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!existing) return;

    const ob = { ...form };
    // if image is a File, store just name (same behaviour as NewEvent)
    if (form.image instanceof File) ob.image = form.image.name;

    updateEventById(id, ob);
    navigate("/admin");
  };

  if (!existing) {
    return (
      <div className="container mx-auto p-4 pt-30 bg-white min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Édition d'événement</h2>
          <p className="text-gray-500">Événement introuvable (id: {id})</p>
          <Link to="/admin">
            <button className="btn btn-ghost mt-4">Retour</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-30 bg-white min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Éditer l'événement</h2>
        <p className="text-gray-500 mb-6">Modifiez les informations de l'événement</p>
        <form onSubmit={submit} className="space-y-4 bg-white">
          <div>
            <label className="block text-sm font-medium text-gray-700">Titre de l'événement *</label>
            <input
              type="text"
              value={form.titre}
              onChange={handleChange("titre")}
              className="input input-bordered border-1 border-red-100 w-full mt-1  bg-white"
              placeholder="Ex: Séminaire d'entreprise"
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">Type d'événement *</label>
              <select
                value={form.type_evenement}
                onChange={handleChange("type_evenement")}
                className="select select-bordered border-1 border-red-100 w-full mt-1 bg-white"
              >
                <option value="">Sélectionnez</option>
                <option value="Séminaire">Séminaire</option>
                <option value="Atelier">Atelier</option>
                <option value="Conférence">Conférence</option>
                <option value="Concert">Concert</option>
              </select>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">Date de début *</label>
              <input
                type="date"
                value={form.date_debut}
                onChange={handleChange("date_debut")}
                className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700">Date de fin</label>
              <input
                type="date"
                value={form.date_fin}
                onChange={handleChange("date_fin")}
                className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700">Heure</label>
              <input
                type="time"
                value={form.heure}
                onChange={handleChange("heure")}
                className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700">Tarifs</label>
              <input
                type="text"
                value={form.tarifs}
                onChange={handleChange("tarifs")}
                className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
                placeholder="Ex: Gratuit, 10.000, 5000 (en Ar)"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Lieu *</label>
            <input
              type="text"
              value={form.lieu}
              onChange={handleChange("lieu")}
              className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
              placeholder="Ex: Paris, France"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea
              value={form.description || ""}
              onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))}
              className="textarea textarea-bordered w-full mt-1 h-24 bg-white border-1 border-red-100"
              placeholder="Décrivez l'événement..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Image (URL ou fichier)</label>

            <input
              type="text"
              value={typeof form.image === "string" ? form.image : ""}
              onChange={handleChange("image")}
              className="input input-bordered w-full mt-1 bg-white border-1 border-red-100 mb-2"
              placeholder="https://example.com/image.jpg"
            />

            <div
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-dashed border-2 border-gray-200 rounded p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50"
            >
              <div className="flex items-center gap-4 w-full">
                <button
                  type="button"
                  onClick={handleFileButtonClick}
                  className="btn btn-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Choisir un fichier
                </button>

                <div className="text-sm text-gray-600 truncate">
                  {form.image instanceof File
                    ? form.image.name
                    : typeof form.image === "string" && form.image
                    ? form.image.split("/").pop()
                    : "Aucun fichier choisi — glisser-déposer une image ici ou cliquez pour sélectionner"}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClearImage}
                  className="btn btn-ghost btn-sm text-red-600"
                >
                  Supprimer
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]);
                  else handleChange("image")(e);
                }}
                className="hidden"
              />
            </div>

            {imagePreview && (
              <img src={imagePreview} alt="preview" className="mt-2 max-h-48 object-contain rounded" />
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/admin">
              <button type="button" className="btn btn-ghost w-full md:w-auto">
                Annuler
              </button>
            </Link>
            <button type="submit" className="btn bg-red-600 text-white w-full md:w-auto">Mettre à jour</button>
          </div>
        </form>
      </div>
    </div>
  );
};
