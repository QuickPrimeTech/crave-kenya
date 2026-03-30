"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "./ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -1.2935157737048506,
  lng: 36.78723767863231,
};

export function MapCard() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });
  return (
    <>
      {/* Map Card */}
      <Card className="overflow-hidden shadow-lg py-0 h-fit gap-2">
        <CardContent className="p-0">
          <div className="aspect-video">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <Skeleton className="w-full h-full" />
            )}
          </div>
        </CardContent>
        <CardFooter className="pb-3 bg-card w-full">
          <Button
            nativeButton={false}
            render={
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.google.com/maps/place/CRAVE+KENYA+-+KILIMANI/@-1.2938599,36.7837958,17.71z/data=!4m10!1m2!2m1!1scrave+kenya+interior!3m6!1s0x182f1167d2a363f7:0x46d5548b336ee96d!8m2!3d-1.2935272!4d36.787241!15sChRjcmF2ZSBrZW55YSBpbnRlcmlvcloWIhRjcmF2ZSBrZW55YSBpbnRlcmlvcpIBCnJlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblRVTkpjVGRIZFdsM1JSQULgAQD6AQQIABBA!16s%2Fg%2F11vk4jzg9s?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
              />
            }
          >
            <MapPin />
            Open in Google Maps
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
