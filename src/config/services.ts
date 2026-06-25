/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

// TODO: placeholder service photos — copied from the template and cycled for variety.
// Replace each with a real photo of this crew doing the actual work before launch.
import landClearingImg from '../assets/services/land-clearing-services.jpg';
import forestryMulchingImg from '../assets/services/forestry-mulching.jpg';
import brushRemovalImg from '../assets/services/brush-removal.jpg';
import treeStumpImg from '../assets/services/tree-stump-removal.jpg';
import lotClearingImg from '../assets/services/lot-clearing.jpg';
import rightOfWayImg from '../assets/services/right-of-way-clearing.jpg';
import underbrushImg from '../assets/services/underbrush-clearing.jpg';
import grubbingImg from '../assets/services/grubbing-site-prep.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Forestry Mulching"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'land-clearing-services',
    name: 'Land Clearing Services',
    short: 'Land Clearing',
    blurb: 'Forestry mulching, brush removal, lot clearing, and site prep — one local crew to clear your acreage across Montgomery County.',
    description:
      'We are a full-service land clearing company working across Montgomery County, from the fast-growing acreage around Conroe and Magnolia out to the dense East Texas brush in Willis, New Caney, and Splendora. If it needs to be cleared, we clear it: forestry mulching of thick underbrush, yaupon, and post oak; brush and tree removal; stump grinding; fence-line and right-of-way clearing; and full lot prep before a build. Most of the land out here is not open pasture — it is tangled woods, briars, and second-growth scrub that has to be opened up before you can build, fence, farm, or even walk it. We bring the right equipment for the job, whether that is a forestry mulcher that turns standing brush into mulch in a single pass or a dozer and grubbing setup for a full clear-and-grade. You tell us the acreage, what is growing on it, and what you are trying to do with the land, and we give you a straight answer and a real price. No surprises, no leaving you with a field of stumps and debris — just an honest crew that knows how to clear East Texas land.',
    sections: [
      {
        h: 'One crew for the whole clearing job',
        body: 'A lot of folks hire one outfit to mulch the brush, another to push the trees, and a third to haul the debris. We do all of it. Forestry mulching, brush and tree removal, stump grinding, grubbing, and final grade and site prep — it is one phone call and one crew that sees the job through from a wall of woods to ground you can actually use. That continuity matters: the people who mulch your underbrush are the same people who know whether a stump has to come out or what the dirt looks like once the brush is gone.',
      },
      {
        h: 'Built for dense East Texas brush',
        body: 'Montgomery County land is not flat, open prairie. It is thick with yaupon, post oak, sweetgum, briars, and second-growth scrub, often on damp or sandy ground that turns to mud after a rain. Clearing it is its own kind of work. We size the equipment to the job — a forestry mulcher for selective clearing that leaves the big hardwoods and a layer of mulch behind, or heavier dozer and grubbing equipment when a lot has to be taken to bare, buildable dirt. Knowing which approach fits your property is the difference between a clean job and a torn-up, eroding mess.',
      },
      {
        h: 'Straight answers, honest pricing',
        body: 'Clearing is easy to oversell because most landowners cannot picture what is under the brush until it is gone. We do not work that way. We walk the property, tell you what it will actually take, and quote it up front by the acre or the job. If forestry mulching will get you where you want to be without a full grub-and-haul, we say so and save you the money. If the ground needs real site prep before a build, we tell you that too — so you can plan instead of getting surprised.',
      },
    ],
    points: [
      'Mulching, brush removal, tree and stump work, and site prep — one crew',
      'Residential lots and rural acreage across Montgomery County',
      'Selective clearing that keeps the trees you want',
      'Honest, up-front pricing by the acre or the job',
      'We walk the property and show you the plan before we start',
      'Equipment matched to the brush — mulcher, dozer, or grubbing',
    ],
    faqs: [
      {
        q: 'How much does it cost to clear an acre in Montgomery County?',
        a: 'It depends on what is growing on it and what you want left behind. Light underbrush and forestry mulching cost far less per acre than a full clear, grub, and haul down to bare dirt. Thick yaupon and post oak, large trees, and stump removal all add to it. We walk the property and quote it by the acre or the job so you know the real number before any equipment shows up.',
      },
      {
        q: 'Do you handle the whole job or just the mulching?',
        a: 'The whole job. We forestry mulch underbrush, remove brush and trees, grind or pull stumps, grub roots, and do final grade and site prep. One call covers it, and the crew that opens up your property is the crew that finishes it — no juggling three contractors to get a buildable lot.',
      },
      {
        q: 'My land is thick woods with no access — can you still clear it?',
        a: 'Almost always, yes. Dense, untouched East Texas brush is most of what we do. We can cut an access path in with the mulcher and work from there. Tell us roughly how much acreage and what is growing on it when you call and we will come prepared with the right equipment.',
      },
      {
        q: 'Will clearing leave my property a muddy mess of stumps and debris?',
        a: 'Not the way we do it. Forestry mulching leaves a clean layer of mulch instead of piles of debris, and when a job calls for a full clear we grind or pull the stumps and grade the ground so you are left with usable land — not a minefield of holes and root balls. We tell you up front what the finished property will look like.',
      },
    ],
    image: landClearingImg,
    imageAlt: 'Land clearing crew opening up wooded acreage in Montgomery County, Texas',
    hubOnly: true,
  },
  {
    slug: 'forestry-mulching',
    name: 'Forestry Mulching',
    short: 'Forestry Mulching',
    blurb: 'One machine, one pass — we grind standing brush, yaupon, and small trees into mulch and leave the ground clean.',
    description:
      'Forestry mulching is the fastest, cleanest way to clear underbrush in Montgomery County, and it is what we do most. A single tracked machine with a mulching head grinds standing brush, yaupon, briars, saplings, and small trees right where they stand and spreads the material back over the ground as a layer of mulch. There is no burning, no piles to haul off, and no torn-up dirt — the mulch knits the soil together and protects against the erosion that bare-cleared East Texas lots are prone to after a hard rain. It is ideal for opening up overgrown acreage, thinning underbrush while keeping your mature post oaks and hardwoods, clearing fence lines and trails, and prepping a lot before a more detailed clear. We mulch residential lots and rural tracts all over the county, and because there are no haul-off or burn costs, it is usually the most affordable way to take back land that has gone to brush.',
    sections: [
      {
        h: 'Why mulching beats traditional clearing',
        body: 'Traditional clearing pushes everything into piles with a dozer, then you pay to burn it or haul it off, and you are left with bare, rutted dirt and disturbed roots that erode. Forestry mulching skips all of that. The machine grinds the brush in place in a single pass and lays it down as mulch, so there is no debris to deal with, the topsoil stays put, and the mulch layer holds moisture and chokes out regrowth. For most underbrush and small-tree clearing in Montgomery County, it is faster, cleaner, and cheaper.',
      },
      {
        h: 'Selective clearing that keeps your good trees',
        body: 'One of the best things about mulching is control. We can take out the yaupon, briars, sweetgum, and scrub while leaving your mature post oaks, pines, and shade trees standing — something a dozer cannot do. That makes it ideal for thinning a wooded lot into a park-like stand, opening up sight lines and pasture, or clearing the understory for a homesite without losing the trees that give the property its value and shade.',
      },
      {
        h: 'What mulching handles well — and its limits',
        body: 'Mulching is the right tool for underbrush, briars, yaupon, saplings, and trees up to a moderate diameter, and for keeping cleared ground from growing back. For very large trees, full stump removal, or taking a lot down to bare, gradeable dirt for a slab, you will want to pair it with tree removal, stump grinding, or grubbing — which we also do. We will tell you honestly when mulching alone will get you there and when the job needs more.',
      },
    ],
    points: [
      'Standing brush, yaupon, briars, and small trees ground in place',
      'No burning, no debris piles, no haul-off cost',
      'Mulch layer left behind to hold soil and slow regrowth',
      'Selective clearing keeps your mature hardwoods and pines',
      'Great for overgrown acreage, fence lines, trails, and homesites',
      'Usually the most affordable way to reclaim brushy land',
    ],
    faqs: [
      {
        q: 'What size trees can a forestry mulcher handle?',
        a: 'A mulching head handles brush, yaupon, briars, saplings, and trees up to a moderate diameter very efficiently. Larger trees take longer and at some point are better felled and handled separately. When we walk your property we will tell you what the mulcher can take and what, if anything, needs a different approach.',
      },
      {
        q: 'Do I have to haul off or burn the material?',
        a: 'No — that is the whole advantage. The mulcher grinds everything in place and spreads it as a mulch layer over the ground. There are no piles to burn and nothing to haul off, which saves both money and the hassle of a burn permit and cleanup.',
      },
      {
        q: 'Will the brush just grow right back?',
        a: 'The mulch layer slows regrowth by shading the soil, but aggressive species like yaupon will eventually try to come back from the roots. For long-term control, plan to mow or re-mulch periodically, or pair mulching with grubbing to pull the roots where you need the clearing to be permanent. We will advise on what fits your goals for the land.',
      },
      {
        q: 'Can you mulch around trees I want to keep?',
        a: 'Yes, and that is one of the best uses for it. We clear the underbrush and scrub while leaving your post oaks, pines, and shade trees standing, giving you a clean, park-like stand instead of a bare-pushed lot. Just mark or point out the trees you want kept and we will work around them.',
      },
    ],
    image: forestryMulchingImg,
    imageAlt: 'Forestry mulcher grinding underbrush into mulch on a Montgomery County property',
  },
  {
    slug: 'brush-removal',
    name: 'Brush Removal',
    short: 'Brush Removal',
    blurb: 'Overgrown with yaupon, briars, and scrub? We clear the brush and give you back open, usable ground.',
    description:
      'Brush has a way of taking over land in Montgomery County. Leave a lot alone for a few seasons and yaupon, briars, privet, sweetgum, and second-growth scrub fill in until you cannot walk it, fence it, or see across it. We clear that brush and give you usable ground again. Depending on the property and your goal, we handle it with forestry mulching that grinds the brush in place, or with cutting and removal where you want the material gone — clearing overgrown lots and acreage, reclaiming pasture and fields lost to scrub, opening up sight lines and trails, and cleaning up around homes, barns, ponds, and fence lines. East Texas brush grows back fast and grows back thick, so we also talk through what it takes to keep it down once it is cleared. Tell us how much you have and what is growing in it, and we will give you a straight price and a plan to take the land back.',
    sections: [
      {
        h: 'Reclaiming land that has gone to brush',
        body: 'A surprising amount of our work is land that used to be open — pasture, a yard, a homesite, a clear fence line — that brush has simply swallowed. Yaupon and briars are relentless out here. We clear the overgrowth back to the ground you actually want, whether that is reopening a pasture, clearing around a pond or barn, or just making a wooded lot walkable and safe again. The goal is land you can use, not just a path bushhogged through the middle of it.',
      },
      {
        h: 'Mulch it or haul it — the right method for your lot',
        body: 'There are two honest ways to deal with heavy brush, and the right one depends on your property. Forestry mulching grinds it in place and leaves a clean mulch layer — fastest and cheapest, with nothing to haul. Cutting and removal makes sense when you want the material gone entirely, for example near a home, a finished yard, or a future build pad. We will tell you which fits your lot and your goal instead of defaulting to whatever is easiest for us.',
      },
    ],
    points: [
      'Yaupon, briars, privet, sweetgum, and scrub cleared out',
      'Overgrown lots, pastures, and fields reclaimed',
      'Brush cleared around homes, barns, ponds, and fence lines',
      'Mulched in place or cut and removed — your choice and your lot',
      'Sight lines, trails, and access reopened',
      'Honest plan for keeping the brush down after clearing',
    ],
    faqs: [
      {
        q: 'How is brush removal different from forestry mulching?',
        a: 'Forestry mulching is one method of brush removal — it grinds the brush in place and leaves mulch behind. Brush removal more broadly can also mean cutting and hauling the material off when you want it gone entirely. We do both and recommend the one that fits your property, your budget, and what you plan to do with the land.',
      },
      {
        q: 'Can you clear brush without killing the trees I want to keep?',
        a: 'Yes. We clear the understory brush — yaupon, briars, and scrub — while leaving your mature trees standing. That is one of the most common requests we get: open up the land and clean out the junk growth, but keep the post oaks, pines, and shade trees that make the property worth having.',
      },
      {
        q: 'How do I keep the brush from coming right back?',
        a: 'East Texas brush is aggressive and will try to return from the roots, especially yaupon. Keeping it down means periodic mowing or re-mulching, and for areas where you want it gone for good, grubbing out the roots. We will walk you through a realistic maintenance plan based on what is growing on your land.',
      },
    ],
    image: brushRemovalImg,
    imageAlt: 'Crew clearing overgrown brush and yaupon on a property in Montgomery County, Texas',
  },
  {
    slug: 'tree-stump-removal',
    name: 'Tree & Stump Removal',
    short: 'Tree & Stump',
    blurb: 'Dead, leaning, or in the way? We drop trees and grind out the stumps so you are left with clean, usable ground.',
    description:
      'Clearing land in Montgomery County almost always means dealing with trees and the stumps they leave behind. We remove trees that are dead, leaning, storm-damaged, or simply in the way of a build, a fence, a driveway, or a clear lot — and we grind or pull the stumps so you are not left with a yard full of trip hazards and root balls. Out here that means a lot of post oak, pine, sweetgum, and water oak, plus the trees that come down or get weakened in our storms. We handle individual problem trees, clearing trees from a building pad or right-of-way, and removing the stumps left from a clearing job or an old fence line. Stumps are more than an eyesore — they sprout, they rot and attract pests, and they make it impossible to mow, grade, or build over the ground. We take the tree and the stump so the spot is genuinely clear and ready to use.',
    sections: [
      {
        h: 'Trees that need to come out',
        body: 'Not every tree is worth keeping. Dead and dying trees, storm-damaged and leaning trees, and trees crowding a homesite, driveway, fence line, or build pad all need to come out — for safety as much as for the clearing. We drop them safely, including the tight spots near structures, and clear the wood. On a full land-clearing job we take out the trees that are in the way of the build while leaving the ones you want to keep for shade and value.',
      },
      {
        h: 'Why the stump has to go too',
        body: 'A stump left in the ground is more than ugly. Many species, post oak and sweetgum included, will sprout right back from the stump and roots. Stumps rot over years and draw termites and other pests toward your structures, and they make it impossible to mow, grade, or pour over that ground. We grind stumps below grade or pull them out entirely on a clearing job, so the spot is level, usable, and ready for whatever comes next.',
      },
    ],
    points: [
      'Dead, leaning, and storm-damaged trees removed safely',
      'Trees cleared from build pads, driveways, and fence lines',
      'Stumps ground below grade or pulled on a clearing job',
      'Post oak, pine, sweetgum, and water oak handled',
      'Wood and debris cleared from the work area',
      'Ground left level and ready to mow, grade, or build',
    ],
    faqs: [
      {
        q: 'Do you grind the stump or pull it out?',
        a: 'Both are options and it depends on the job. Stump grinding takes the stump down below grade quickly and is ideal for a yard or a single tree. On a full land-clearing job where the ground will be graded or built on, we often pull the stumps and roots out entirely so there is nothing left to settle or sprout. We will recommend the right one for your situation.',
      },
      {
        q: 'Can you take out a tree close to my house or fence?',
        a: 'Yes. Tight removals near structures, fences, and power lines are part of the work — we drop them in sections or in a controlled direction so nothing gets damaged. Point out the trees you are worried about when we walk the property and we will tell you straight how we would handle each one.',
      },
      {
        q: 'Will a ground stump grow back?',
        a: 'Grinding the stump well below grade stops most regrowth, and removing the root ball entirely stops it for good. Species like sweetgum and yaupon are persistent and can sprout from leftover roots, so if regrowth is a concern we will grind deep or pull the roots and tell you what to watch for.',
      },
    ],
    image: treeStumpImg,
    imageAlt: 'Tree and stump removal on a wooded lot in Montgomery County, Texas',
  },
  {
    slug: 'lot-clearing',
    name: 'Lot Clearing',
    short: 'Lot Clearing',
    blurb: 'Bought a wooded lot to build on? We clear it down to clean, buildable ground — brush, trees, stumps, and all.',
    description:
      'North of Houston the land is selling fast, and most of the lots and acreage changing hands are wooded, brushy, and not ready to build on. We clear them. Lot clearing is taking a raw, overgrown parcel and turning it into ground you can actually put a house, barn, shop, or driveway on — clearing the brush, removing the trees in the way, grinding or pulling the stumps, and grubbing the roots so the dirt is clean and gradeable. We do this all over Montgomery County, from single homesites in Magnolia and Pinehurst to multi-acre tracts in Conroe, Willis, and New Caney. The right amount of clearing matters: you want the build pad and access open and clean, but you usually want to keep the mature trees that give the finished property shade and value. We plan the clearing around where the house, drive, and utilities are going, leave the trees worth keeping, and hand you a lot that is ready for the next step instead of a tangled mess and a pile of debris.',
    sections: [
      {
        h: 'From raw woods to a buildable homesite',
        body: 'A wooded Montgomery County lot has to go through several steps before anyone pours a slab: the brush and understory come out, the trees in the footprint of the house, drive, and utilities come down, the stumps and roots get ground or grubbed out, and the ground gets cleaned up so a grading crew can come behind us. We handle all of that as one job, planned around your build, so you are not stuck coordinating three contractors and hoping the lot ends up usable.',
      },
      {
        h: 'Clear what you must, keep what you want',
        body: 'The mistake we see most is over-clearing — pushing every tree on the lot when the only thing that needed clearing was the build pad and the drive. Mature post oaks and pines are slow to replace and add real value and shade to a finished home. We clear what the build actually requires and leave the trees worth keeping, so you end up with a homesite in the woods rather than a bare, sun-baked pad. If you do want it taken all the way down, we do that too — your call.',
      },
    ],
    points: [
      'Wooded and brushy lots cleared to buildable ground',
      'Brush, trees, stumps, and roots removed',
      'Clearing planned around the house, drive, and utilities',
      'Mature trees worth keeping left standing',
      'Single homesites and multi-acre tracts',
      'Lot left clean and ready for grading and the build',
    ],
    faqs: [
      {
        q: 'I just bought a wooded lot to build on — where do we start?',
        a: 'Walk it with us. We need to know where the house, driveway, and utilities are going so we clear what the build requires and leave the trees worth keeping. From there we quote the clearing — brush, trees, stumps, and grubbing — and get the lot to clean, gradeable ground ready for your grading and foundation crew.',
      },
      {
        q: 'Do I need the whole lot cleared, or just the build pad?',
        a: 'Usually just the build pad, driveway, and a working area around them — not the whole lot. Over-clearing strips the mature trees that give a finished home shade and value. We clear what your build actually needs and leave the rest, unless you specifically want the parcel taken down further.',
      },
      {
        q: 'Will the lot be ready to build on when you are done?',
        a: 'It will be cleared, stumped, grubbed, and cleaned up to buildable ground. Final grading, pad compaction, and foundation work are typically a separate grading or excavation step, and we leave the lot in clean shape for that crew to come behind us. We will tell you exactly where our work ends and theirs begins.',
      },
    ],
    image: lotClearingImg,
    imageAlt: 'Wooded lot being cleared for a new build in Montgomery County, Texas',
  },
  {
    slug: 'right-of-way-clearing',
    name: 'Right-of-Way & Fence Line Clearing',
    short: 'Right-of-Way',
    blurb: 'Overgrown fence lines, easements, and access roads cleared back to a clean, maintainable strip.',
    description:
      'Fence lines, property lines, easements, and access roads all want to disappear under brush in Montgomery County, and once they do they are a real problem — you cannot fix a fence you cannot reach, brush growing through the wire tears it apart, and an overgrown easement or right-of-way blocks access and creates a fire and storm hazard. We clear those strips back to a clean, maintainable line. That means cutting and mulching the brush, briars, and saplings along fence lines so you can repair and run fence, opening up overgrown property lines so you can see and survey your boundary, clearing utility and pipeline easements and access roads, and keeping right-of-way corridors open. Linear clearing is its own skill — it is about getting a clean, consistent strip the full length of the line without tearing up what is on either side. We have the equipment to work tight along a fence or down a narrow easement and leave you a line you can actually keep up.',
    sections: [
      {
        h: 'Fence lines you can actually work',
        body: 'A fence line buried in yaupon and briars is a fence line you cannot maintain — and the brush growing through the wire is actively destroying it. We clear a clean strip along the line so you can pull old fence, set new posts, and run wire without fighting the brush, then keep a maintainable buffer on each side so it does not close back in by next season. Whether you are fencing for the first time or reclaiming an old line, we open it up so the fencing work is straightforward.',
      },
      {
        h: 'Easements, access roads, and right-of-way',
        body: 'Utility and pipeline easements, shared access roads, and right-of-way corridors have to stay open — for access, for safety, and often by requirement. Brush, saplings, and overhanging growth close them in fast out here. We clear and mulch these corridors to a clean, consistent width, keep access roads passable, and cut back the encroaching growth so the line stays open and usable. It is linear work that needs a clean edge and a steady width, which is exactly what we are set up to do.',
      },
    ],
    points: [
      'Fence lines cleared so you can repair and run fence',
      'Property lines opened up for visibility and survey',
      'Utility, pipeline, and access easements cleared',
      'Right-of-way corridors kept open and passable',
      'Clean, consistent width the full length of the line',
      'Maintainable buffer left so it does not close back in',
    ],
    faqs: [
      {
        q: 'Can you clear a fence line without damaging my existing fence?',
        a: 'Yes. We work tight and controlled along an existing fence, cutting and mulching the brush and briars off the wire and posts without tearing up the fence itself. If the fence is already being destroyed by brush grown through it, we will tell you honestly what is salvageable and what needs replacing once the line is open.',
      },
      {
        q: 'How wide a strip do you clear along a fence or easement?',
        a: 'It depends on what the line is for. For a fence you can work, a strip wide enough to set posts and run wire with a buffer on each side is usually right. For utility and pipeline easements there is often a required width. Tell us the purpose and any width requirement and we will clear to a clean, consistent strip that matches it.',
      },
      {
        q: 'Do you clear overgrown property lines so I can survey?',
        a: 'Yes. Reopening a brushed-in property line so a surveyor can find pins and run the boundary is a common job. We clear a clean line along the boundary so you can see across it, locate corners, and get the survey done — just have the line marked or the corners flagged if you know where they are.',
      },
    ],
    image: rightOfWayImg,
    imageAlt: 'Fence line and right-of-way being cleared on rural acreage in Montgomery County, Texas',
  },
  {
    slug: 'underbrush-clearing',
    name: 'Underbrush Clearing',
    short: 'Underbrush',
    blurb: 'Clear the tangled understory — yaupon, briars, and scrub — while keeping your mature trees standing.',
    description:
      'Underbrush clearing is thinning out the tangled growth beneath your trees while leaving the trees themselves standing, and in Montgomery County that usually means taking on yaupon. Yaupon holly grows into a dense, head-high thicket under the post oaks and pines, and along with briars, privet, and young sweetgum it turns what could be open, park-like woods into an impassable, snake-friendly tangle. We clear that understory out — most often with forestry mulching that grinds it in place and leaves a clean mulch floor — and give you woods you can walk through, see across, hunt, and enjoy. It is the go-to for opening up a wooded homesite without losing the shade trees, improving a property for wildlife and visibility, reducing the fuel load and fire risk around structures, and just making acreage usable again. The big trees stay; the junk growth choking the ground beneath them goes.',
    sections: [
      {
        h: 'Taking back the understory from yaupon',
        body: 'Yaupon is the defining underbrush problem out here. Left alone it forms a continuous, dense thicket under the canopy that you cannot see or walk through and that crowds out everything else. Mulching it out clears the floor of the woods in a single pass and lays down a mulch layer, turning a tangled lot into open, usable, park-like woods with your hardwoods and pines still standing. It is one of the most satisfying transformations we do — same trees, completely different property.',
      },
      {
        h: 'Better for wildlife, safety, and use',
        body: 'Clearing the understory does more than make land look good. It opens sight lines and walking and hunting access, improves the property for wildlife by encouraging ground cover and browse where there was only thicket, and cuts the fuel load that makes a brushy lot a fire risk in a dry stretch. Around a home it pushes the dense, flammable, pest-harboring growth back from your structures. We clear to the result you are after, whether that is recreation, wildlife, fire safety, or simply usable land.',
      },
    ],
    points: [
      'Yaupon, briars, privet, and young scrub cleared from the understory',
      'Mature post oaks, pines, and hardwoods left standing',
      'Most often mulched in place — clean floor, no debris piles',
      'Open, walkable, park-like woods you can use',
      'Improves wildlife habitat, sight lines, and access',
      'Reduces fuel load and fire risk around structures',
    ],
    faqs: [
      {
        q: 'What exactly is underbrush clearing?',
        a: 'It is clearing the tangled growth beneath your trees — yaupon, briars, privet, and young scrub — while leaving the mature trees standing. The result is open, park-like woods you can walk through and use, instead of an impassable thicket. We usually do it with a forestry mulcher so the cleared material becomes a clean mulch layer rather than debris.',
      },
      {
        q: 'Will clearing the underbrush hurt my big trees?',
        a: 'No — done right it helps them. Removing the competing yaupon and scrub takes pressure off your mature trees and opens up the stand. We work around the trees you want kept, clearing the understory without damaging their trunks or major roots. Just point out anything specific you want protected.',
      },
      {
        q: 'How long until the yaupon and brush come back?',
        a: 'Yaupon is persistent and will try to resprout from the roots over time. The mulch layer slows it, and most owners keep the understory open with a periodic re-mulch or mow every couple of years. If you want a particular area cleared for good, we can grub the roots there. We will give you a realistic maintenance plan for your land.',
      },
    ],
    image: underbrushImg,
    imageAlt: 'Underbrush and yaupon cleared beneath mature trees on a Montgomery County property',
  },
  {
    slug: 'grubbing-site-prep',
    name: 'Grubbing & Site Prep',
    short: 'Site Prep',
    blurb: 'Roots out, ground cleaned and leveled — the final step that turns a cleared lot into buildable dirt.',
    description:
      'Grubbing and site prep is the last step between a cleared lot and a buildable one. Clearing the brush and trees gets the standing growth off the property, but the roots, stumps, and root balls are still in the ground — and you cannot pour a slab, build a driveway, or properly grade over them. Grubbing is pulling those roots and stumps out and cleaning the organic material out of the soil so the ground is solid, stable, and ready. We grub and prep sites across Montgomery County: removing stumps and root systems, raking and clearing the cleared debris, rough-grading and leveling the ground, and getting a build pad, driveway, barn site, or pasture ready for the next crew. This is where the difference between a clean clearing job and a problem one shows up — roots and organic material left in the dirt rot, settle, and cause cracks and low spots under a structure later. We take the ground all the way down to clean, stable dirt so what you build on it holds.',
    sections: [
      {
        h: 'Why grubbing matters before you build',
        body: 'It is tempting to think clearing is done once the brush and trees are off, but the roots are still down there. Build or pave over buried roots and stumps and they rot out over the next few years, leaving voids that settle and crack a slab, a driveway, or a pad. Grubbing pulls the roots and stumps and gets the organic material out of the soil, so the ground under your structure is mineral dirt that compacts and holds. It is the unglamorous step that prevents expensive problems down the road.',
      },
      {
        h: 'From cleared lot to ready-to-build pad',
        body: 'After grubbing we clean up and rough-grade the site — knocking down high spots, filling holes left by stumps, and leaving the ground reasonably level and clean for the grading, pad, or foundation crew that comes next. Whether it is a homesite, a driveway, a barn or shop pad, or pasture you are putting back into use, we hand off a clean, stable site so the next step goes smoothly. We will tell you exactly where our prep ends and the formal grading or excavation work begins.',
      },
    ],
    points: [
      'Stumps, roots, and root balls pulled from the ground',
      'Organic material cleared out for stable, buildable dirt',
      'Cleared debris raked and removed',
      'Rough grading and leveling of the site',
      'Build pads, driveways, barn sites, and pasture prepped',
      'Clean handoff to your grading or foundation crew',
    ],
    faqs: [
      {
        q: 'What is the difference between clearing and grubbing?',
        a: 'Clearing removes the standing growth — brush, trees, and visible debris. Grubbing goes further and removes what is left in the ground: the stumps, roots, and root balls, along with the organic material in the soil. You need grubbing before you build or pave, because roots left in the ground rot and settle and will crack whatever you put on top.',
      },
      {
        q: 'Do I need site prep if I am just clearing for pasture?',
        a: 'Less than you would for a build, but some still helps. For pasture you mainly want the stumps low or out and the ground smooth enough to mow and to keep equipment safe — full grubbing to mineral dirt is usually only needed where you will build or pave. We will match the level of prep to what you are doing with the land so you are not paying for more than you need.',
      },
      {
        q: 'Will my lot be ready for a foundation when you finish?',
        a: 'It will be grubbed, cleaned, and rough-graded to clean, stable ground. The final, engineered grading, pad compaction, and foundation work are typically handled by a grading or excavation contractor, and we leave the site in clean shape for them. We will tell you up front exactly where our site prep ends and that crew picks up.',
      },
    ],
    image: grubbingImg,
    imageAlt: 'Grubbing and site prep producing buildable ground on a Montgomery County lot',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
