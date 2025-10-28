
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useEventStore } from "../store/eventStore"; 

export const NewEventForm = ({
  titre = "",
  date_debut = "",
  date_fin = "",
  heure = "",
  type_evenement = "",
  lieu = "",
  tarifs = "",
  image = "",
}) => {
  const [form, setForm] = useState({
    titre,
    date_debut,
    date_fin,
    heure,
    type_evenement,
    lieu,
    tarifs,
    image,
  });

  const [imagePreview, setImagePreview] = useState(image || "");

  const {addEvent} = useEventStore();

  useEffect(() => {
    setForm({ titre, date_debut, date_fin, heure, type_evenement, lieu, tarifs, image });
    setImagePreview(image || "");
  }, [titre, date_debut, date_fin, heure, type_evenement, lieu, tarifs, image]);

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

  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", typeof form);
    const ob = {...form}

    ob.image = form.image.name
    ob.id = Math.floor(Math.random() * 1000000);

    console.log(ob)

    addEvent(ob)
    navigate("/admin");
    // if (onSubmit) onSubmit(form);
    // else console.log("NewEventForm submit:", form);
  };

const fileInputRef = React.useRef(null);

const setImageFile = (file) => {
    // revoke previous blob url to avoid memory leak
    if (imagePreview && imagePreview.startsWith && imagePreview.startsWith("blob:")) {
        // eslint-disable-next-line no-useless-catch
        try { URL.revokeObjectURL(imagePreview); } catch (e) { throw e;}
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

return (
    <div className="container mx-auto p-4 pt-30 bg-white min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Nouvel événement</h2>
            <p className="text-gray-500 mb-6">Créez un nouvel événement à venir</p>
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

                    {/* URL input */}
                    <input
                        type="text"
                        value={typeof form.image === "string" ? form.image : ""}
                        onChange={handleChange("image")}
                        className="input input-bordered w-full mt-1 bg-white border-1 border-red-100 mb-2"
                        placeholder="https://example.com/image.jpg"
                    />

                    {/* Ergonomic upload area */}
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

                        {/* hidden native file input */}
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

                    {/* Preview */}
                    {imagePreview && (
                        <img src={imagePreview} alt="preview" className="mt-2 max-h-48 object-contain rounded" />
                    )}
                </div>

                <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
                    <Link to="/admin"><button type="button" className="btn btn-ghost w-full md:w-auto">
                        Annuler
                    </button></Link>
                    <button type="submit" className="btn bg-red-600 text-white w-full md:w-auto">Créer événement</button>
                </div>
            </form>
        </div>
    </div>
);
};