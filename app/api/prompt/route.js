import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return NextResponse.json(prompts);
  } catch (error) {
    return NextResponse.error();
    // return new Response("Failed to fetch all prompts", { status: 404 });
  }
};
