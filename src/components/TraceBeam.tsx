/* eslint-disable */
"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function TraceBeam() {
  return (
    
    <TracingBeam className="">
      <div className=" d-flex justify-center mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-center antialiased pt-1 px-3 border-2 border-indigo-900 rounded-lg bg-gradient-to-b from-slate-900 to-slate-800 ">
        {TravelContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 opacity-0">
              {item.badge}
            </h2>

            <p className="font-Calsans text-xl md:text-lg text-center mx-auto mb-4 text-slate-400">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const TravelContent = [
  {
    title: "Boston, Massachusetts",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Boston, Massachusetts, is a city steeped in history and charm.
        As I wandered through its cobblestone streets 
        and historic neighborhoods, I was struck by the 
        seamless blend of the old and the new. The city's
        rich past is evident in landmarks like the 
        Freedom Trail and the historic North End, while 
        its vibrant present is showcased in its bustling 
        markets, contemporary art galleries, and 
        innovative restaurants.
        </p>
        <p className=" text-slate-400">
        The patina of Boston is one of intellectual 
        curiosity and cultural richness. The presence of 
        renowned universities and colleges contributes 
        to a lively atmosphere filled with students, 
        academics, and visitors from around the world. 
        The city's green spaces, like the Boston Common 
        and the Public Garden, offer a peaceful respite 
        from the urban hustle and bustle. The vibe of 
        Boston is unique—a blend of historical 
        significance, academic prowess, and modern 
        vitality that makes it a fascinating place to 
        explore and experience.
        </p>
      </>
    ),
    badge: "",
    image:
    '/imgs/Boston.jpg',
  },
  {
    title: "Key West, Florida",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Key West, Florida, is a tropical oasis that 
        captivates the senses with its laid-back 
        charm and vibrant energy. As I strolled 
        along Duval Street, the heart of the city, 
        I was surrounded by colorful boutiques, 
        lively bars, and open-air cafes, each 
        adding to the eclectic mix that defines 
        Key West. The island's crystal-clear 
        waters and swaying palm trees create a 
        picturesque backdrop that feels like a 
        step into a postcard.
        </p>
        <p className="text-slate-400">
        The mood of Key West is one of carefree 
        relaxation and creative inspiration. The city's
        history as a haven for writers and artists
        is palpable, with its quirky art galleries,
        historic homes, and the famous Hemingway House. 
        The laid-back island vibe is complemented by
        the friendly locals, who welcome visitors with
        open arms and a smile. Whether it's watching a stunning
        sunset at Mallory Square, snorkeling in the coral
        reefs, or simply enjoying a slice of key lime
        pie, Key West offers a unique blend of natural
        beauty, artistic flair, and island tranquility
        that leaves a lasting impression.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/imgs/KeyWest.jpg",
  },
 
  {
    title: "Memphis, Tennessee",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Memphis, Tennessee, is a city that resonates with the soulful rhythms of blues, rock 'n' roll, and soul music. As I walked down Beale Street, the vibrant heart of Memphis' music scene, I was enveloped in the sounds of live music emanating from historic clubs and bars, each telling a story of the city's musical legacy. The spirit of Elvis Presley looms large, with Graceland offering a pilgrimage site for fans of the King of Rock 'n' Roll.
        </p>
        <p className="text-slate-400">
        The atmosphere of Memphis is one of charm and historical depth. The city played a pivotal role in the civil rights movement, and the National Civil Rights Museum at the Lorraine Motel provides a profound and moving insight into this important chapter of American history. The vibe of Memphis is warm and welcoming, with a strong sense of community and a deep appreciation for its cultural heritage. Whether it's savoring the flavors of authentic barbecue, exploring the banks of the Mississippi River, or soaking in the rich musical heritage, Memphis offers a unique and enriching experience that stays with you long after you leave.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/imgs/Memphis.jpg",
  },
  {
    title: "Negril, Jamaica",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Negril, Jamaica, is a tropical paradise that embodies the laid-back spirit and natural beauty of the Caribbean. As I wandered along the famous Seven Mile Beach, I was mesmerized by the pristine white sand and the crystal-clear turquoise waters that stretched as far as the eye could see. The rugged cliffs of the West End, with their dramatic ocean views and stunning sunsets, added to the allure of this idyllic destination.
        </p>
        <p className="text-slate-400">
        The town of Negril is one of relaxed bliss and natural harmony. The town's vibe is characterized by its friendly locals, reggae music, and a carefree lifestyle that invites visitors to slow down and savor the moment. The ocean offers a playground for water sports, from snorkeling and scuba diving to explore the vibrant coral reefs, to sailing and kayaking along the serene coastline. The cuisine in Negril, with its flavorful jerk spices and fresh seafood, is a delight for the senses. Whether it's lounging on the beach, exploring the natural beauty of the surrounding area, or dancing the night away to reggae beats, Negril offers a slice of paradise that captivates the soul.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/imgs/Negril.jpg",
  },
  {
    title: "Boise, Idaho",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Boise, Idaho, is a city that seamlessly blends urban sophistication with outdoor adventure. As I explored its vibrant downtown, I was impressed by the array of boutique shops, artisanal coffeehouses, and farm-to-table restaurants that reflect the city's growing culinary scene. The Boise River, flowing through the heart of the city, adds a sense of tranquility and offers opportunities for kayaking, fishing, and riverside strolls.
        </p>
        <p className="text-slate-400">
        Boise's vibe is down-to-earth and welcoming, making it a hidden gem in the Pacific Northwest. Whether it's exploring the vibrant downtown, enjoying the great outdoors, or experiencing the local culture, Boise offers a unique and enriching experience that leaves a lasting impression.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/imgs/Boise.jpg",
  },
  {
    title: "Eagle River, Wisconsin",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Eagle River, Wisconsin, is a quintessential Northwoods town that embodies the serene beauty and outdoor charm of the region. Nestled among lush forests and pristine lakes, this small town is a haven for nature lovers and outdoor enthusiasts. The crystal-clear waters of the Eagle River Chain of Lakes offer endless opportunities for fishing, boating, and water sports, while the surrounding woods are perfect for hiking, biking, and wildlife watching.
        </p>
        <p className="text-slate-400">
        Eagle River's feel is warm and welcoming, with a strong sense of tradition and a deep appreciation for the natural beauty that surrounds it. Whether it's exploring the great outdoors, enjoying a quiet moment by the lake, or participating in one of the town's many festivals and events, Eagle River offers a slice of Northwoods paradise that is both enchanting and rejuvenating.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/imgs/EagleRiver.jpg",
  },
];
