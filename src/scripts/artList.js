import BallonDogModel from "../components/art/models/balloonDogModel"
import { HeartFaceEmojiModel } from "../components/art/models/heartFaceEmoji"
import Link from "../components/link"
import ReverseLavaLampModel from "../components/art/models/reverseLavaLampModel"
import RingpopModel from "../components/art/models/ringpopModel"

const artList = [
  {
    sectionName: "3D",
    description:
      "3D objects I've modeled. Click to interact with the objects in 3D",
    items: [
      {
        title: "Reverse Lava Lamp",
        date: "October 2023",
        slug: "3d/reverse-lava-lamp",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/lavaLamp.jpeg?updatedAt=1704249817058",
        alt: "reverse lava lamp",
        pageContent: {
          meshSrc: <ReverseLavaLampModel />,
          cameraPosition: [200, 100, 500],
          lights: (
            <>
              <directionalLight color="red" position={[-500, 100, -500]} />
              <directionalLight color="red" position={[200, 100, 200]} />
            </>
          ),
          description: (
            <p>
              I modeled this odd lava lamp for{" "}
              <Link to="https://www.instagram.com/womp3d/reel/CyjHVI9x7Hw/">
                Wompathon 2023.
              </Link>
              . The prompt was to model an object with a material other than
              what it has in real life, so I switched the lava lamp blobs to be
              in the top and bottom sections. Use your cursor to interact with
              the 3D model below.
            </p>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/lavaLampWide.png?updatedAt=1704249943328",
            },
          ],
        },
      },
      {
        title: "Waffle",
        date: "September 2023",
        slug: "3d/waffle",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/waffle.png?updatedAt=1693624781899",
        alt: "waffle pokemon",
        pageContent: {
          meshSrc:
            "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/meshes/waffle.glb?updatedAt=1693525628231",
          cameraPosition: [0, 4, 8],
          lights: (
            <>
              <ambientLight intensity={0.8} color={"red"} />
            </>
          ),
          description: (
            <>
              <h2>🧇 🧇 🧇</h2>
              <p>
                This is a 3D model of the iOS waffle emoji, made with{" "}
                <Link to="https://womp.com/">Womp 3D</Link>. Use your cursor to
                interact with the model below.
              </p>
            </>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/waffleWide.png?updatedAt=1734558839106",
              alt: "3d model of a round belgian waffle emoji",
            },
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/waffle.gif",
            },
          ],
        },
      },
      {
        title: "Ring Pop",
        date: "September 2023",
        slug: "3d/ringpop",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/ringpopSquare__UN-vqGjY.png?updatedAt=1693795711338",
        alt: "3d model of a red ringpop",
        pageContent: {
          meshSrc: <RingpopModel />,
          cameraPosition: [0, 3, 5],
          lights: (
            <>
              <directionalLight color="pink" position={[-5, 5, 5]} />
              <directionalLight color="pink" position={[-5, 5, -5]} />
            </>
          ),
          description: (
            <>
              <p>
                3D model of a cherry Ring Pop, made with{" "}
                <Link to="https://womp.com/">Womp 3D</Link>. The reflective
                properties of this material were crucial to making it look real-
                light needs to bounce around inside the hard candy surface. Use
                your cursor to interact with the 3D model below.
              </p>
            </>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/ringpop_CCmnWetsL.png?updatedAt=1693795681536",
            },
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/ringpopBars1.png?updatedAt=1693795681717",
            },
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/ringpopBars2.png?updatedAt=1693795681481",
            },
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/ringpopDensity.gif",
            },
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/ringpopTwist.gif",
            },
          ],
        },
      },
      {
        title: "Tangela",
        date: "August 2023",
        slug: "3d/tangela",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/tangelaSquare.png?updatedAt=1693799566752",
        alt: "tangela pokemon",
        pageContent: {
          meshSrc:
            "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/meshes/tangela.glb?updatedAt=1693799125339",
          lights: (
            <>
              <ambientLight intensity={0.8} color={"pink"} />
              <directionalLight color="white" position={[-20, 5, 5]} />
              <directionalLight color="white" position={[-5, 5, -5]} />
            </>
          ),
          description: (
            <>
              <p>
                Tangela is my favorite Pokemon! I made this model with{" "}
                <Link to="https://womp.com/">Womp 3D</Link>. Womp has a helpful
                UI for modeling smooth curves, which came in handy for Tangela's
                mess of blue vines. It's also easy to interpolate colors between
                points on these curves, so I could select multiple shades of
                blue for the vines. Use your cursor to interact with the model
                below.
              </p>
            </>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/tangelaFront.png?updatedAt=1693633223182",
              alt: "blue tangela pokemon facing the front",
            },
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/tangelaSide.png?updatedAt=1693633223016",
              alt: "blue tangela pokemon facing the left",
            },
          ],
        },
      },
      {
        title: "Emoji - 🥳",
        date: "August 2023",
        slug: "3d/emoji2",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/partyHatEmoji.png?updatedAt=1693625012864",
        alt: "🥳 emoji",
        pageContent: {
          meshSrc:
            "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/meshes/partyHatEmoji.glb?updatedAt=1693800835538",
          description: (
            <>
              <h2>🥳 🥳 🥳</h2>
              <p>
                This is a 3D model of the iOS party face emoji, made with{" "}
                <Link to="https://womp.com/">Womp 3D</Link>. Use your cursor to
                interact with the model below.
              </p>
            </>
          ),
          lights: (
            <>
              <directionalLight color="pink" position={[0, 0, 3]} />
              <directionalLight
                color="pink"
                position={[-1, 2, 1]}
                intensity={2}
              />
            </>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/partyHatEmojiWide.png?updatedAt=1693801470866",
            },
            {
              type: "video",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/partyHatEmoji.mp4?updatedAt=1693801399947",
            },
          ],
        },
      },
      {
        title: "Emoji - 🥰",
        date: "August 2023",
        slug: "3d/emoji3",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/loveEmoji.png?updatedAt=1693625002430",
        alt: "🥰 emoji",
        pageContent: {
          meshSrc: <HeartFaceEmojiModel />,
          description: (
            <>
              <h2>🥰 🥰 🥰</h2>
              <p>
                This is a 3D model of the iOS loving face emoji, made with{" "}
                <Link to="https://womp.com/">Womp 3D</Link>. Use your cursor to
                interact with the model below.
              </p>
            </>
          ),
          lights: (
            <>
              <ambientLight intensity={1.5} color={"red"} />
              <directionalLight
                color="black"
                position={[0, 10, 5]}
                intensity={2}
              />
            </>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/heartEyesEmojiWide.png?updatedAt=1693806568231",
            },
            {
              type: "video",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/heartEyesEmoji_xRZ7VYXTb.mp4?updatedAt=1693806571911",
            },
          ],
        },
      },
      // {
      //   title: "Emoji - 🤪",
      //   date: "August 2023",
      //   slug: "3d/emoji1",
      //   src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/emoji1.png?updatedAt=1693154678498",
      //   alt: "🤪 emoji",
      //   pageContent: {
      //     meshSrc:
      //       "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/meshes/zanyEmoji.glb?updatedAt=1693795366278",
      //   },
      // },
      {
        title: "Balloon Animal",
        date: "August 2023",
        slug: "3d/balloon-animal",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/balloonAnimal.png?updatedAt=1693154795865",
        alt: "blue balloon dog animal",
        pageContent: {
          meshSrc: <BallonDogModel />,
          cameraPosition: [0, 0, 10],
          lights: (
            <>
              <ambientLight intensity={0.8} color={"white"} />
              <directionalLight color="white" position={[-20, 5, 5]} />
              <directionalLight color="white" position={[-5, 5, -5]} />
            </>
          ),
          media: [
            {
              type: "img",
              src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/balloonAnimalWide.png?updatedAt=1693801644766",
            },
          ],
        },
      },
    ],
  },
  {
    sectionName: "Series",
    description: "",
    items: [
      {
        title: "Riso Woodle Series",
        date: "December 2023",
        slug: "series/riso-woodles",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/risoWoodle.png?updatedAt=1704266504737",
        alt: "Riso Woodle curve",
      },
      {
        title: "Collagescape Series",
        date: "October 2023",
        slug: "series/collagescape",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/screenshot-1786714.217667.png?updatedAt=1704267702022",
        alt: "collagescape",
      },
    ],
  },
  {
    sectionName: "Digital Drawing",
    description: "Getting practice with a drawing tablet. Click to enlarge",
    items: [
      {
        title: "Fruit Rainbow",
        date: "June 2023",
        slug: "fruit-rainbow",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/fruitRainbow.gif",
        alt: "fruit rainbow gif",
      },
      {
        title: "Seedy",
        date: "June 2023",
        slug: "seedy",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/seedless.png",
        alt: "strawberry seeds drawing",
      },
      {
        title: "Succulents",
        date: "January 2023",
        slug: "succlents",
        src: " https://ik.imagekit.io/5xtlzx2c3y/website/art/succulents.jpeg",
        alt: "succulents drawing",
      },
      {
        title: "Sushi",
        date: "December 2022",
        slug: "sushi",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/sushi.png",
        alt: "sushi drawing",
      },
      {
        title: "Self Portrait",
        date: "December 2022",
        slug: "self-portrait",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/portrait.png",
        alt: "self portrait",
        description: "A cartoon-y self portrait, bags under my eyes and all",
      },
    ],
  },
  {
    sectionName: "Other",
    items: [
      {
        title: "Drawing of Mt. Rainier",
        date: "April 2023",
        slug: "mt-rainier",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/drawingMtRainier.jpg",
        alt: "drawing of Mt. Rainier",
        description: "Ballpoint pen",
      },
      {
        title: "Sweet Dreams",
        date: "March 2023",
        slug: "sweet-dreams",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/collageSweetDreams.jpg",
        alt: "collage sweet dreams",
        description: "A dreamscape collage",
      },
    ],
  },
]
export default artList

/**
 * @param {*string} slug The slug URL to look for
 * @returns the art data with the given slug
 */
export function getArtBySlug(slug) {
  for (let section of artList) {
    for (let item of section.items)
      if (item.slug === slug) {
        return item
      }
  }
  return null
}

/**
 * @param {*} slug the current slug
 * @returns the slug for the next art item relative to current slug
 */
export function getNextArtSlug(slug) {
  for (let section of artList) {
    for (let i = 0; i < section.items.length; i++) {
      let item = section.items[i]
      if (item.slug === slug) {
        return i < section.items.length - 1 ? section.items[i + 1].slug : null
      }
    }
  }
  return null
}

/**
 * @param {*} slug the current slug
 * @returns the slug for the previous art item relative to current slug
 */
export function getPreviousArtSlug(slug) {
  for (let section of artList) {
    for (let i = 0; i < section.items.length; i++) {
      let item = section.items[i]
      if (item.slug === slug) {
        return i > 0 ? section.items[i - 1].slug : null
      }
    }
  }
  return null
}
