import { writable } from "svelte/store";
import { nanoid } from "nanoid";

export async function saveNotes(notes) {
  return localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  console.log("in store", notes);
  return notes;
}

export const notes = writable(getNotes());
// const data = [
//   {
//     id: nanoid(),
//     title: "Lorem ipsum dolor sit.",
//     content: "this is a small note...",
//     date: new Date(),
//   },
//   {
//     id: nanoid(),
//     title: "Lorem ipsum dolor sit amet.",
//     content: "this is a small note...",
//     date: new Date(),
//   },
// ];

// saveNotes(data);
