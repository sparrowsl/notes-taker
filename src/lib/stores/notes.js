import { writable } from "svelte/store";
// import { nanoid } from "nanoid";

export async function saveNotes(notes) {
  return localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || []);
}

export const notes = writable(getNotes());
