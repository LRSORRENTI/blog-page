"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function TraceBeam() {
  return (
    
    <TracingBeam className="">
      <div className=" d-flex justify-center mx-auto w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] text-center antialiased pt-1 px-3 border-2 border-indigo-900 rounded-lg">
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
        The ambiance of Boston is one of intellectual 
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
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Las Vegas, Nevada",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Las Vegas, Nevada, is a city that pulsates with
        energy and excitement. From the moment I
        arrived, I was swept up in the vibrant
        atmosphere that defines this iconic destination. 
        The dazzling lights of the Strip, the sound of 
        slot machines in bustling casinos, and the 
        eclectic mix of people from all corners of the globe 
        created a sense of exhilaration and 
        possibility. The city's unique blend of entertainment, 
        from world-class shows and concerts to gourmet dining 
        and luxury shopping, offered
        an endless array of experiences to explore.
        </p>
        <p className="text-slate-400">
        The ambiance of Las Vegas is like nowhere else
        I've visited. It's a place where the ordinary fades
        away, replaced by an extraordinary playground
        for the senses. The city's skyline, dominated by
        impressive hotel-casinos, each with its own
        theme and attractions, adds to the surreal
        feeling that permeates the air. Walking down the
        Strip at night, surrounded by the neon glow
        and the electric energy of the crowds, I felt
        as though I was part of a never-ending
        celebration. Las Vegas is truly a city that
        never sleeps, and its vibrant vibe is
        infectious, leaving
        visitors with memories that last a lifetime.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Myrtle Beach, South Carolina",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Myrtle Beach, South Carolina, is a coastal 
        paradise that exudes a laid-back, beachy vibe. 
        The moment I set foot on its soft, sandy shores, 
        I was greeted by the soothing sound of waves 
        crashing against the beach and the warm embrace 
        of the sun. The city's famous oceanfront 
        boardwalk, lined with shops, restaurants, and 
        amusement attractions, offers a lively and
        family-friendly atmosphere that's hard to resist.
        </p>
        <p className="text-slate-400">
        The ambiance of Myrtle Beach is all about
        relaxation and fun in the sun. Whether it's
        lounging on the beach, playing a round of golf
        at one of the many courses, or exploring the
        natural beauty of the surrounding area,
        there's a sense of leisure and enjoyment
        that permeates the air. The city comes alive
        at night with live music, seafood feasts,
        and colorful fireworks displays. Myrtle Beach
        is a destination that invites visitors to
        unwind, indulge,
        and create lasting memories by the sea.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        The ambiance of Key West is one of carefree 
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
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: " Minneapolis, Minnesota",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Minneapolis, Minnesota, is a city that blends
        urban sophistication with natural beauty. As I
        explored its vibrant neighborhoods, I was
        struck by the impressive skyline, contemporary
        architecture, and the abundance of green spaces
        that dot the urban landscape. The city's famous
        chain of lakes, connected by picturesque bike
        and walking paths, offers a refreshing escape
        from the bustling city life
        and showcases the locals' love for the outdoors.
        </p>
        <p className="text-slate-400">
        The ambiance of Minneapolis is one of cultural
        richness and dynamic energy. The city is a hub
        for the arts, with numerous theaters, galleries,
        and music venues that cater to a wide range of
        tastes. The diverse culinary scene, from cozy
        cafes to innovative restaurants, reflects the
        city's multicultural fabric. The vibe of Minneapolis is welcoming and inclusive, with a strong sense of community and a deep appreciation for the arts and nature. Whether it's attending a live performance, indulging in culinary delights, or enjoying a leisurely stroll around the lakes, Minneapolis offers a vibrant
        and enriching experience for all who visit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chicago, Illinois",
    description: (
      <>
        <p className="mb-4 text-slate-400">
        Chicago, Illinois, is a city that exudes
        architectural grandeur and cultural depth.
        As I navigated its bustling streets, I was
        awestruck by the towering skyscrapers,
        including the iconic Willis Tower,
        that define its skyline. The city's rich
        architectural heritage is further showcased
        in landmarks like the Chicago Cultural
        Center and the historic Water Tower.
        The beauty of Chicago extends to its
        expansive lakefront, where the shimmering
        waters of Lake Michigan meet lush parks
        and scenic beaches.
        </p>
        <p className="text-slate-400">
        The ambiance of Chicago is one of vibrant
        diversity and artistic expression. The city
        is a melting pot of cultures, reflected
        in its diverse neighborhoods, each with
        its own unique character and cuisine. The
        arts scene is thriving, with world-class
        museums like the Art Institute of Chicago,
        a dynamic theater district, and a lively
        music scene that ranges from blues
        to classical. The vibe of Chicago
        is energetic and resilient, with a
        palpable sense of pride among its
        residents. Whether it's exploring the
        Magnificent Mile, taking in the panoramic
        views from a rooftop bar, or immersing oneself
        in the rich cultural tapestry, Chicago offers
        an unforgettable urban experience that
        captivates the heart and mind.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit11.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit11.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit11.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit11.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
