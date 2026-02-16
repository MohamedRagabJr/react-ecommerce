import { NextRequest, NextResponse } from "next/server";
import axios from "axios"

export async function GET(req : NextRequest){
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    return NextResponse.json(data)
}