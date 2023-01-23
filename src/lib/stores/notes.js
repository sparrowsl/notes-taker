import { writable } from "svelte/store";

export async function saveNotes(notes) {
  return localStorage.setItem("notes", JSON.stringify(notes));
}

export function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  // Sort the notes by date updated
  return notes.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const filtered = writable([]);
export const searchedTerm = writable("");

export const notes = writable(getNotes());
