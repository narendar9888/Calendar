import React, {useEffect, useState} from "react";
import "./EventModal.css";

import { useCalendar } from "../context/CalendarContext";

const categories = [
    "Study",
    "Work",
    "Meeting",
    "Personal",
    "Health",
    "Travel",
    "Birthday",
];

const colors = [
    "#4f46e5",
    "#10b981",
    "#ef4444",
    "#f59e0b",
    "#EC4899",
    "#06B6D4",
    "#8B5CF6",
];

function EventModal() {
    const {
        selectedEvent,
        selectedDate,
        updateEvent,
        addevent,
        deleteEvent,
        closeModal
    } = useCalendar();

    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        category: "Study",
        color: "#4f46e5"
    });

    useEffect(() => {
        if (selectedEvent) {
            setForm(selectedEvent);
        } else {
            setForm({
                title: "",
                description: "",
                date: selectedDate.toISOString().slice(0, 10),
                time: "",
                category: "Study",
                color: "#4f46e5"
            });
        }
    }, [selectedEvent, selectedDate]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
        };


    const saveEvent = () => {
        if (!form.title.trim()) {
            alert("Please enter event title.");
            return
        }

        if (selectedEvent) {
            updateEvent(form);
        } else {
            addevent(form);
        }

        closeModal();
        
    };

    const removeEvent = () => {
        if (!selectedEvent) return;

        if (window.confirm("Delete this event?")) {
            deleteEvent(selectedEvent.id);
            closeModal();
        }
    }
    return (
        <div className="mod-overlay">
            <div className="event-mod">
                <h2>
                    {selectedEvent ? "Edit Event" : "New Event"}
                </h2>

                <input
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                />
                
                <textarea 
                    name="description" 
                    placeholder="Description"
                    rows="5"
                    value={form.description}
                    onChange={handleChange}
                ></textarea>

                <input 
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                 />

                <input 
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                 />

                <select 
                    name="category"
                    value={form.category}
                    onChange={handleChange} 
                >
                    {categories.map((i) => (
                        <option key={i}>{i}</option>
                    ))}
                </select>

                <div className="color-list">
                    {colors.map((c) => (
                        <div
                            key={c}
                            className={`color ${
                                form.color === c ? "active" : ""
                            }`}
                            style={{background: c }}
                            onClick={() => 
                                setForm({
                                    ...form,
                                    color: c,
                                })
                            }
                        ></div>
                    ))}
                </div>

                <div className="mod-btn">
                    <button
                      className="save-btn"
                      onClick={saveEvent}
                    >
                        {selectedEvent ? "Update" : "Save"}
                    </button>

                    {selectedEvent && (
                        <button
                          className="delete-btn"
                          onClick={removeEvent}
                        >
                            Delete
                        </button>
                    )}

                    <button
                      className="cancel-btn"
                      onClick={closeModal} 
                     >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
};

export default EventModal;