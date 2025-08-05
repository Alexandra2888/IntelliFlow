import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "512x512" } = body;
        
        console.log("[IMAGE_REQUEST_BODY]", body);
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!process.env.REPLICATE_API_TOKEN) {
            return new NextResponse("Replicate API token not configured", { status: 500 });
        }
        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }
        
        // Parse resolution to get width and height
        const [width, height] = resolution.split('x').map(Number);
        
        console.log("[IMAGE_PARSED_RESOLUTION]", { resolution, width, height });
        
        // Temporarily remove validation to debug
        console.log("[IMAGE_GENERATION]", { prompt, amount, resolution, width, height });
        
        const response = await replicate.run(
            "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
            {
                input: {
                    prompt: prompt,
                    width: width,
                    height: height,
                    num_outputs: parseInt(amount, 10),
                    scheduler: "K_EULER",
                    num_inference_steps: 30,
                    guidance_scale: 7.5,
                }
            }
        );
        
        console.log("[IMAGE_RESPONSE]", response);
        
        // Format response to match frontend expectations
        const formattedResponse = Array.isArray(response) 
            ? response.map((url: string) => ({ url }))
            : [{ url: response }];
        
        return NextResponse.json(formattedResponse);
    } catch (error) {
        console.log("[IMAGE_ERROR]", error);
        console.log("[IMAGE_ERROR_DETAILS]", {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
        return new NextResponse("Internal Error", { status: 500 });
    }
}