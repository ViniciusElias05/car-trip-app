import axios from "axios";
import dotenv from "dotenv";
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({path: envPath});

const apiKey = process.env.GOOGLE_API_KEY;
const baseUrl = 'https://routes.googleapis.com/directions/v2:computeRoutes';

export async function getRoute(origin:String, destination:string) {
    const params = {
        origin: {
            address: origin
        },
        destination: {
            address: destination
        },
        travelMode: 'DRIVE',
    };

    try {
        const response = await axios.post(
            baseUrl,
            params,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': apiKey,
                    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.legs.startLocation,routes.legs.endLocation'
                }
            }
        );
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

