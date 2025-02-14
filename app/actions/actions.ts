import {get} from "@/app/fetchWrapper";

export async function getJokes() {
  return await get('jokes');
}