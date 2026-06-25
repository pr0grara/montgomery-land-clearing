/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'conroe',
    name: 'Conroe',
    state: 'TX',
    intro:
      'Conroe is the seat of Montgomery County and one of the fastest-growing cities in Texas, spreading north of Houston along I-45 and out around the shores of Lake Conroe. That growth is exactly what keeps us busy: raw, wooded acreage is being bought up and turned into homesites, subdivisions, and shops faster than crews can clear it. Most of the land out here is dense East Texas brush — yaupon thickets under post oak and pine, sweetgum, briars, and second-growth scrub — that has to be opened up before anyone can build, fence, or even walk it. We clear lots and acreage all over the Conroe area, from single homesites on the west side toward Lake Conroe to multi-acre tracts out toward Cut and Shoot and the rural edges of the city. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence lines and easements, and grub and prep build pads down to clean, gradeable dirt. The ground here is often sandy and damp, and a careless clearing job erodes and ruts fast — so we mulch to hold the soil where we can and grade clean where the lot is going to be built on. Tell us the acreage and what is growing on it, and we will give you a straight price and a plan.',
    neighborhoods: ['Lake Conroe', 'April Sound', 'Grangerland', 'Cut and Shoot', 'Westwood', 'Oak Ridge North'],
    landmarks: ['Lake Conroe', 'Sam Houston National Forest', 'W.G. Jones State Forest', 'Downtown Conroe'],
    issues: [
      {
        title: 'Fast growth eating up wooded acreage',
        body: 'Conroe is growing as fast as anywhere in Texas, and most of the land changing hands is raw, brushy woods that has to be cleared before it can be built on. We turn those tangled lots into clean, buildable ground — brush, trees, stumps, and roots — so the build can actually start.',
      },
      {
        title: 'Lake Conroe lots on sandy, erodible soil',
        body: 'Properties around Lake Conroe sit on sandy ground that ruts and erodes fast if it is bare-cleared and left. We lean on forestry mulching to keep a protective mulch layer on the soil, and grade clean only where a build pad requires it, so a cleared lakeside lot does not wash after the first hard rain.',
      },
      {
        title: 'Dense yaupon under the post oaks',
        body: 'Across the Conroe area, yaupon forms a head-high thicket under the post oak and pine canopy that makes acreage impassable. Mulching the understory out while leaving the big trees gives you open, usable, park-like woods instead of a tangle — one of the most common jobs we do here.',
      },
    ],
    nearby: ['montgomery', 'willis', 'cut-and-shoot'],
    faqs: [
      {
        q: 'Do you cover all of the Conroe and Lake Conroe area?',
        a: 'Yes. We clear land throughout Conroe, around Lake Conroe and April Sound, out toward Grangerland and Cut and Shoot, and across the rural edges of the city. If you are not sure your property is in our area, call and ask — we very likely cover it.',
      },
      {
        q: 'I bought a wooded lot near Lake Conroe to build on — what is the first step?',
        a: 'Walk it with us so we know where the house, drive, and utilities are going. From there we clear the brush and trees the build requires, grind or pull the stumps, and grub the pad to clean, gradeable dirt — while leaving the shade trees worth keeping. On sandy lakeside lots we are careful to protect against erosion.',
      },
      {
        q: 'How much does it cost to clear an acre around Conroe?',
        a: 'It depends entirely on what is growing on it and how clean you need it. Light underbrush mulching is far cheaper per acre than a full clear, grub, and grade down to bare dirt. Thick yaupon, large post oaks, and stump removal add to it. We walk the property and quote it by the acre or the job so you get a real number up front.',
      },
    ],
  },
  {
    slug: 'montgomery',
    name: 'Montgomery',
    state: 'TX',
    intro:
      'Montgomery is the small historic town the county is named for, sitting on the west side of Lake Conroe in some of the prettiest rolling, wooded country in the area. It has grown from a quiet crossroads into a sought-after spot for homes on acreage, gated lake and golf communities, and ranchettes carved out of old timber and pasture land. Almost all of that land starts out as dense woods and brush. We clear lots and acreage throughout the Montgomery area, from homesites in the lake and golf communities to multi-acre tracts and ranchettes out toward Dobbin and the FM-149 country. The land here is a mix of post oak and pine woods, yaupon understory, and old pasture gone back to scrub, often on rolling ground that has to be cleared thoughtfully so it does not erode. We forestry mulch underbrush, clear and remove trees and brush, grind stumps, open up fence lines, and grub and prep build pads. Folks out here tend to want a homesite in the woods — open and usable, but with the mature trees kept — and that selective clearing is exactly what we are set up for. Tell us about the property and your goal and we will give you a straight price.',
    neighborhoods: ['Bentwater', 'Walden', 'Del Lago', 'Lake Creek', 'Buffalo Springs', 'Clear Creek Forest'],
    landmarks: ['Lake Conroe', 'Historic downtown Montgomery', 'Sam Houston National Forest', 'Cedar Brake Park'],
    issues: [
      {
        title: 'Ranchettes and acreage homesites',
        body: 'A lot of Montgomery-area land is being split into ranchettes and acreage homesites carved from old timber and pasture. We clear these tracts to usable ground — opening pasture, clearing the homesite and drive, and grubbing the build pad — while keeping the rolling, wooded character that drew people here.',
      },
      {
        title: 'Homesites in the gated lake and golf communities',
        body: 'Wooded lots in communities like Bentwater, Walden, and Del Lago need careful clearing that respects the trees and the lot lines. We do selective mulching and clearing that opens the build pad and keeps the mature post oaks and pines, so the finished home sits in the woods rather than on a bare pad.',
      },
      {
        title: 'Old pasture gone back to brush',
        body: 'Plenty of acreage around Montgomery is former pasture that has grown up in yaupon, briars, and scrub. Mulching and brush removal reclaim that ground back to open, usable pasture or a clean homesite without the cost of hauling off a mountain of debris.',
      },
    ],
    nearby: ['conroe', 'dobbin', 'pinehurst'],
    faqs: [
      {
        q: 'Do you clear land in the Montgomery and west Lake Conroe area?',
        a: 'Yes. We clear lots and acreage throughout Montgomery, the gated lake and golf communities like Bentwater and Walden, and the ranchette country out toward Dobbin and along FM-149. Tell us where the property is and what is on it and we will confirm and come prepared.',
      },
      {
        q: 'Can you clear my acreage but keep the big trees?',
        a: 'Absolutely — that is one of our most common requests around Montgomery. We forestry mulch the yaupon and understory and clear only the trees in the way of your build or drive, leaving the mature post oaks and pines that give the property its shade and value. Point out what you want kept and we will work around it.',
      },
      {
        q: 'I want to put old pasture back into use — can you help?',
        a: 'Yes. Reclaiming pasture that has gone back to yaupon and scrub is a great fit for forestry mulching — we grind the brush in place, leave a mulch layer, and give you open ground again without a haul-off bill. For areas you want kept clear long-term, we can grub the roots. We will lay out a plan for your acreage.',
      },
    ],
  },
  {
    slug: 'magnolia',
    name: 'Magnolia',
    state: 'TX',
    intro:
      'Magnolia sits in the booming southwest corner of Montgomery County along FM-1488 and FM-1774, a fast-growing area where master-planned communities and new subdivisions are filling in around old timber tracts and rural homesteads. The growth here is relentless, and nearly all of it begins as dense pine and hardwood woods with a thick yaupon and brush understory that has to be cleared first. We clear lots and acreage all over the Magnolia area, from single homesites and rural tracts out toward Todd Mission and the Renaissance Festival grounds to lots being prepped along the 1488 and 1774 corridors. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence and property lines, and grub and prep build pads to clean dirt. A lot of Magnolia land is heavily timbered with tall pines, so we plan the clearing around the trees worth keeping and take out only what the build, drive, or fence requires. We also see a lot of fence-line and property-line clearing here as people define and fence newly bought acreage. Tell us the acreage, what is growing on it, and what you are after, and we will quote it straight by the acre or the job.',
    neighborhoods: ['Todd Mission', 'Mostyn Manor', 'High Meadow Ranch', 'Audubon', 'Westwood', 'Decker Prairie'],
    landmarks: ['Texas Renaissance Festival', 'Unity Park', 'FM-1488 corridor', 'Lake Windcrest'],
    issues: [
      {
        title: 'Explosive growth along 1488 and 1774',
        body: 'Magnolia is one of the fastest-developing parts of the county, and raw timbered land along the FM-1488 and FM-1774 corridors is being cleared for homes and subdivisions constantly. We turn those wooded tracts into clean, buildable ground so the projects can move.',
      },
      {
        title: 'Heavily timbered pine and hardwood tracts',
        body: 'Much of the Magnolia area is dense pine and hardwood woods. We plan clearing around the tall pines and good hardwoods worth keeping, mulch the understory, and take out only what the build, drive, or fence actually requires instead of flattening everything.',
      },
      {
        title: 'Fencing and defining new acreage',
        body: 'As people buy and split acreage around Magnolia, fence lines and property lines need clearing so they can be surveyed and fenced. We open up clean, consistent strips along boundaries and fence lines so the survey and fencing work go smoothly.',
      },
    ],
    nearby: ['pinehurst', 'stagecoach', 'dobbin'],
    faqs: [
      {
        q: 'Do you cover the Magnolia and FM-1488 area?',
        a: 'Yes. We clear lots and acreage throughout the Magnolia area, along the FM-1488 and FM-1774 corridors, and out toward Todd Mission, Pinehurst, and Decker Prairie. Tell us where the property is and what is on it and we will confirm.',
      },
      {
        q: 'My Magnolia tract is heavy pine woods — can you clear it without taking every tree?',
        a: 'Yes. We do selective clearing — mulching the yaupon and understory and removing only the trees in the way of your build, drive, or fence — so you keep the tall pines and good hardwoods that make the property worth having. Just walk it with us and mark what you want kept.',
      },
      {
        q: 'I need a fence line cleared on newly bought acreage — do you do that?',
        a: 'We do a lot of it around Magnolia. We clear a clean, consistent strip along your property line or fence line so a surveyor can find the corners and a fencing crew can set posts and run wire. Have the corners flagged if you know where they are and we will clear to them.',
      },
    ],
  },
  {
    slug: 'willis',
    name: 'Willis',
    state: 'TX',
    intro:
      'Willis sits just north of Conroe along I-45, on the north end of Lake Conroe and the edge of the Sam Houston National Forest. It is rural and wooded, growing steadily as people priced out of closer-in areas buy acreage up here to build on. The land is classic East Texas: pine and post oak woods, dense yaupon and brush understory, and low, sometimes damp ground near the lake and the creeks that feed it. We clear lots and acreage throughout the Willis area, from lakeside and forest-edge homesites to rural tracts out toward New Waverly and the FM-1097 country. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence lines and access, and grub and prep build pads. Because a lot of land up here sits low and holds water, we plan clearing to protect the soil and keep the ground from rutting and washing — mulching to hold the dirt where we can. We also clear a lot of brushy, overgrown tracts that folks have bought and want to make usable. Tell us the acreage and what is on it and we will give you a straight price and an honest plan for the property.',
    neighborhoods: ['Seven Coves', 'Corinthian Point', 'Point Aquarius', 'New Waverly area', 'FM-1097 corridor', 'Shepard Hill'],
    landmarks: ['Lake Conroe (north end)', 'Sam Houston National Forest', 'Cagle Recreation Area', 'I-45 corridor'],
    issues: [
      {
        title: 'Acreage buyers building up north',
        body: 'Willis draws people buying rural acreage to build on, away from the busier parts of the county. Most of that land is raw woods and brush that has to be cleared first — we open up the homesite and drive, clear the brush, and grub the pad to buildable ground.',
      },
      {
        title: 'Low, wet ground near the lake and creeks',
        body: 'A lot of land around Willis and the north end of Lake Conroe sits low and holds water. Bare-clearing wet ground ruts and erodes badly, so we lean on forestry mulching to keep a protective layer on the soil and plan the clearing to keep the ground stable.',
      },
      {
        title: 'Forest-edge lots and dense understory',
        body: 'Properties along the edge of the Sam Houston National Forest are heavily wooded with thick yaupon and brush beneath the canopy. Mulching the understory out gives you open, usable, walkable woods while keeping the big trees that border the forest.',
      },
    ],
    nearby: ['conroe', 'panorama-village', 'montgomery'],
    faqs: [
      {
        q: 'Do you clear land in Willis and the north Lake Conroe area?',
        a: 'Yes. We clear lots and acreage throughout Willis, around the north end of Lake Conroe, near the Sam Houston National Forest, and out along the FM-1097 corridor toward New Waverly. Tell us where the property is and we will confirm and come prepared for the access.',
      },
      {
        q: 'My Willis property sits low and stays damp — can you still clear it?',
        a: 'Yes, and we plan for it. Wet ground ruts and erodes if it is bare-cleared and left, so we favor forestry mulching that keeps a protective mulch layer on the soil and work the ground carefully. Tell us how wet it gets and we will choose the approach that leaves it stable.',
      },
      {
        q: 'I bought a brushy tract near Willis — can you make it usable?',
        a: 'That is a lot of what we do up here. Whether you want it cleared for a homesite, opened up as pasture, or just made walkable and usable, we mulch the brush, clear the trees you do not want, and grub where you need it clean. Walk it with us and tell us the goal and we will lay out a plan and a price.',
      },
    ],
  },
  {
    slug: 'new-caney',
    name: 'New Caney',
    state: 'TX',
    intro:
      'New Caney sits in the fast-growing east side of Montgomery County along US-59 (I-69), near the Grand Parkway and the booming Valley Ranch and Porter area. It has gone from rural to one of the busiest growth corridors in the county, and raw, wooded land is being cleared for homes, commercial sites, and subdivisions all around it. The land here is dense East Texas woods and brush — pine, sweetgum, water oak, and thick yaupon and briar understory, much of it on low, sandy ground that drains slowly. We clear lots and acreage throughout the New Caney and Porter area, from homesites and rural tracts to lots being prepped along the 59/69 and Grand Parkway corridors. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence lines and easements, and grub and prep build pads to clean, gradeable dirt. With this much development pressure, a lot of our work here is getting raw tracts ready to build fast and clean. The low, damp ground means we plan clearing to protect against rutting and erosion. Tell us the acreage and what is growing on it and we will give you a straight price.',
    neighborhoods: ['Porter Heights', 'Valley Ranch', 'Roman Forest', 'Tavola', 'Kingwood area', 'Eastex'],
    landmarks: ['Grand Parkway (TX-99)', 'US-59 / I-69 corridor', 'Big Rivers Waterpark', 'East Montgomery County'],
    issues: [
      {
        title: 'Booming growth along 59/69 and the Grand Parkway',
        body: 'New Caney and Porter are among the busiest growth corridors in the county. Raw wooded land is being cleared for homes and commercial sites constantly, and we turn those brushy tracts into clean, buildable ground so projects can move fast.',
      },
      {
        title: 'Low, sandy ground that drains slowly',
        body: 'A lot of land around New Caney sits low on sandy soil that holds water and ruts easily. We plan clearing to protect the ground — mulching to keep a layer on the soil and being careful where the lot is wet — so a cleared tract does not turn into a muddy, eroding mess.',
      },
      {
        title: 'Dense sweetgum, water oak, and yaupon',
        body: 'The woods here are thick with sweetgum, water oak, pine, and a heavy yaupon and briar understory. We mulch the brush, clear the trees in the way, and grind or pull the stumps so the lot is genuinely clear rather than full of sprouting stumps and root balls.',
      },
    ],
    nearby: ['porter', 'splendora', 'conroe'],
    faqs: [
      {
        q: 'Do you cover New Caney, Porter, and the east side of the county?',
        a: 'Yes. We clear lots and acreage throughout New Caney, Porter, and east Montgomery County along the US-59/I-69 and Grand Parkway corridors. Tell us where the property is and what is on it and we will confirm and come prepared.',
      },
      {
        q: 'I need a tract cleared fast to build on near the Grand Parkway — can you help?',
        a: 'Yes. With the development pace out here, getting raw tracts to clean, buildable ground quickly is much of what we do. We clear the brush and trees, grind or pull the stumps, and grub the pad to gradeable dirt, planned around your build. Walk it with us and we will give you a price and a timeline.',
      },
      {
        q: 'The ground on my New Caney lot is low and wet — does that change the clearing?',
        a: 'It does, and we plan for it. Low, sandy ground ruts and erodes if it is bare-cleared and left, so we favor forestry mulching to keep a protective layer on the soil and work carefully where it is wet. Tell us how the lot drains and we will choose the approach that keeps it stable.',
      },
    ],
  },
  {
    slug: 'splendora',
    name: 'Splendora',
    state: 'TX',
    intro:
      'Splendora is a rural community on the northeast side of Montgomery County along US-59 (I-69), surrounded by deep East Texas pine woods and growing as the development pressure from New Caney and Porter pushes north. The land out here is heavily timbered and brushy — tall pines, sweetgum, water oak, and a dense yaupon and briar understory — with a lot of large rural tracts and homesteads on acreage. We clear lots and acreage throughout the Splendora area, from rural homesites and large tracts out toward Patton Village and the FM-2090 country to lots along the 59/69 corridor. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence and property lines, and grub and prep build pads. Because the tracts out here run large and heavily wooded, forestry mulching is often the most practical and affordable way to open up acreage — grinding the brush in place across a lot of ground without a haul-off bill. We also do a lot of fence-line and access clearing on rural property. Tell us the acreage and what is growing on it and we will give you an honest price by the acre or the job.',
    neighborhoods: ['Patton Village', 'Woodbranch', 'Grangerland area', 'FM-2090 corridor', 'Peach Creek', 'East River'],
    landmarks: ['Sam Houston National Forest', 'US-59 / I-69 corridor', 'Peach Creek', 'Caney Creek'],
    issues: [
      {
        title: 'Large, heavily timbered rural tracts',
        body: 'Splendora-area land runs to big, heavily wooded acreage. Forestry mulching is often the most practical way to open up these tracts — grinding the brush across a lot of ground in place, with no piles to haul, while leaving the tall pines and good hardwoods you want to keep.',
      },
      {
        title: 'Development pressure pushing north',
        body: 'As New Caney and Porter fill in, growth is pushing up toward Splendora, and raw woods are being cleared for homesites and tracts. We turn that brushy timber land into usable, buildable ground while keeping the rural, wooded feel where you want it.',
      },
      {
        title: 'Creek-bottom and damp ground',
        body: 'Land along Peach Creek, Caney Creek, and the low spots holds water and grows thick brush. We plan clearing to protect the ground from rutting and erosion, mulching to hold the soil, so a cleared creek-side tract stays stable.',
      },
    ],
    nearby: ['new-caney', 'porter', 'conroe'],
    faqs: [
      {
        q: 'Do you clear land in Splendora and northeast Montgomery County?',
        a: 'Yes. We clear lots and acreage throughout the Splendora area, out toward Patton Village, Woodbranch, and the FM-2090 country, and along the US-59/I-69 corridor. Tell us where the property is and how big it is and we will confirm and come prepared.',
      },
      {
        q: 'I have a large wooded tract near Splendora — what is the best way to clear it?',
        a: 'For large, heavily timbered acreage, forestry mulching is usually the most practical and affordable approach — it grinds the brush and small trees in place across a lot of ground with no haul-off cost, and we can leave the tall pines and good hardwoods standing. We will walk it and recommend the right mix for your goals.',
      },
      {
        q: 'Can you clear a fence line on my rural Splendora property?',
        a: 'Yes. We clear clean, consistent strips along fence lines and property lines so you can survey, set posts, and run wire. On big rural tracts that is a common job for us — tell us the length and where the line runs and we will clear it.',
      },
    ],
  },
  {
    slug: 'porter',
    name: 'Porter',
    state: 'TX',
    intro:
      'Porter sits on the southeast edge of Montgomery County along US-59 (I-69), just north of Kingwood and Humble and right in the path of the Grand Parkway growth corridor. It has gone from rural woods to one of the most actively developing areas in the county, with subdivisions, commercial sites, and new homes filling in fast. The land here is dense East Texas woods and brush — pine, sweetgum, water oak, and heavy yaupon and briar understory — much of it on low, sandy ground near the West Fork of the San Jacinto and its creeks. We clear lots and acreage throughout the Porter and New Caney area, from homesites and rural tracts to lots being prepped along the 59/69 and Grand Parkway corridors. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence lines and easements, and grub and prep build pads to clean dirt. With this much development going on, much of our work here is getting raw tracts ready to build quickly and cleanly, with the low, damp ground planned around to avoid rutting and erosion. Tell us the acreage and what is on it and we will quote it straight.',
    neighborhoods: ['Porter Heights', 'Auburn Trails', 'The Highlands', 'Kingwood area', 'Walden Woods', 'Northcrest'],
    landmarks: ['Grand Parkway (TX-99)', 'US-59 / I-69 corridor', 'West Fork San Jacinto River', 'Kingwood'],
    issues: [
      {
        title: 'Heavy development along the Grand Parkway',
        body: 'Porter sits right in the Grand Parkway growth corridor, and raw wooded land is being cleared for homes and commercial sites constantly. We turn those brushy tracts into clean, buildable ground fast so projects can move.',
      },
      {
        title: 'Low, sandy river-bottom ground',
        body: 'A lot of Porter-area land sits low on sandy soil near the West Fork and its creeks, ground that holds water and ruts easily. We plan clearing to protect the soil — mulching to keep a layer on it — so a cleared tract does not erode or turn to mud.',
      },
      {
        title: 'Thick understory crowding the lots',
        body: 'The woods here carry a dense yaupon, briar, and sweetgum understory beneath the pines and oaks. We mulch the brush out, clear the trees in the way, and grind or pull the stumps so the lot is genuinely clear and ready, not full of sprouting stumps.',
      },
    ],
    nearby: ['new-caney', 'splendora', 'conroe'],
    faqs: [
      {
        q: 'Do you cover Porter and the Grand Parkway corridor?',
        a: 'Yes. We clear lots and acreage throughout Porter, New Caney, and the southeast side of the county along the US-59/I-69 and Grand Parkway corridors. Tell us where the property is and what is on it and we will confirm and come prepared.',
      },
      {
        q: 'I need a lot cleared and ready to build near Porter — what does that involve?',
        a: 'We clear the brush and trees the build requires, grind or pull the stumps, and grub the pad down to clean, gradeable dirt, all planned around where your house, drive, and utilities go. On the low, sandy ground common here we are careful to protect against erosion. Walk it with us and we will price it.',
      },
      {
        q: 'My Porter lot is near the river and stays damp — can you clear it?',
        a: 'Yes, with a plan for the wet ground. Low, sandy river-bottom soil ruts and erodes if it is bare-cleared, so we favor forestry mulching to keep a protective layer on the soil and work carefully where it is wet. Tell us how the lot drains and we will choose the right approach.',
      },
    ],
  },
  {
    slug: 'pinehurst',
    name: 'Pinehurst',
    state: 'TX',
    intro:
      'Pinehurst is a wooded community in southwest Montgomery County along FM-1488, between Magnolia and the Tomball area, named for the tall pines that fill it. It is a sought-after spot for homes on wooded acreage, and as the 1488 corridor has boomed, raw timber land here is being cleared for homesites and small subdivisions. The land is heavily timbered — tall loblolly pines, post oak, sweetgum, and a thick yaupon and brush understory — on rolling, generally well-drained ground. We clear lots and acreage throughout the Pinehurst area, from single wooded homesites to small acreage tracts along and off FM-1488. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence and property lines, and grub and prep build pads. Folks here almost always want to keep their pines — the trees are the whole appeal of the area — so selective clearing that opens the homesite and drive while protecting the mature pines is exactly what we do. Tell us about the property and which trees you want kept, and we will give you a straight price and a plan that leaves you a homesite in the pines.',
    neighborhoods: ['Decker Prairie', 'Mostyn Manor', 'Lake Windcrest area', 'Egypt', 'FM-1488 corridor', 'Spring Branch'],
    landmarks: ['FM-1488 corridor', 'W.G. Jones State Forest (nearby)', 'Magnolia', 'Tomball (nearby)'],
    issues: [
      {
        title: 'Homesites in the tall pines',
        body: 'Pinehurst is known for its tall loblolly pines, and people want homesites tucked into them. We do selective clearing — mulching the understory and opening the build pad and drive — while protecting the mature pines, so the finished home sits in the woods that drew you there.',
      },
      {
        title: 'Growth along the 1488 corridor',
        body: 'As FM-1488 has boomed, wooded land in Pinehurst is being cleared for homesites and small subdivisions. We turn those timber tracts into clean, buildable ground while keeping the trees worth keeping and protecting the rolling, well-drained soil.',
      },
      {
        title: 'Thick yaupon under the canopy',
        body: 'Beneath the pines, yaupon and brush form a dense understory that makes the woods impassable. Mulching it out gives you open, walkable, park-like woods with your pines still standing — a popular job in Pinehurst.',
      },
    ],
    nearby: ['magnolia', 'stagecoach', 'montgomery'],
    faqs: [
      {
        q: 'Do you clear land in Pinehurst and along FM-1488?',
        a: 'Yes. We clear lots and acreage throughout Pinehurst and the surrounding FM-1488 corridor toward Magnolia and Tomball. Tell us where the property is and which trees you want kept and we will confirm and come prepared.',
      },
      {
        q: 'Can you clear my Pinehurst lot but save the pines?',
        a: 'Yes — that is the most common request we get here. We mulch the yaupon and understory and clear only the trees in the way of your build and drive, leaving the tall loblolly pines that make the property special. Mark or point out the trees you want kept and we will work around them.',
      },
      {
        q: 'How much of my wooded acreage should I clear for a home?',
        a: 'Usually just the build pad, the driveway, and a working area around them — not the whole lot. Over-clearing strips the pines that give the property its value and shade. We clear what the build actually needs and leave the rest, unless you want it opened up further.',
      },
    ],
  },
  {
    slug: 'cut-and-shoot',
    name: 'Cut and Shoot',
    state: 'TX',
    intro:
      'Cut and Shoot is a small, famously named rural town just east of Conroe, surrounded by deep East Texas woods and large rural tracts. It is quiet, heavily wooded country — pine, post oak, sweetgum, and dense yaupon and brush understory — with a lot of acreage, homesteads, and timber land. We clear lots and acreage throughout the Cut and Shoot area, from rural homesites and large tracts to land out toward Grangerland and the FM-1314 and FM-2090 country. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence and property lines, and grub and prep build pads. With the big, heavily wooded tracts common out here, forestry mulching is often the most practical and affordable way to open up acreage — grinding the brush in place over a lot of ground without a haul-off bill, while leaving the trees worth keeping. We also do plenty of fence-line, pasture, and access clearing on rural property. Tell us the acreage and what is growing on it and we will give you a straight, honest price.',
    neighborhoods: ['Grangerland', 'Dacus', 'FM-1314 corridor', 'FM-2090 corridor', 'Caney Creek', 'McRae'],
    landmarks: ['Caney Creek', 'Sam Houston National Forest (nearby)', 'Conroe', 'San Jacinto River'],
    issues: [
      {
        title: 'Big, heavily wooded rural tracts',
        body: 'Cut and Shoot is large-acreage timber country. Forestry mulching is usually the most practical way to open up these tracts — grinding the brush across a lot of ground in place, with no haul-off, while keeping the pines and hardwoods you want to keep.',
      },
      {
        title: 'Pasture and homesteads to reclaim',
        body: 'A lot of land out here is old homestead and pasture ground gone back to yaupon and scrub. Mulching and brush removal reclaim it to open, usable pasture or a clean homesite without the cost of hauling off piles of debris.',
      },
      {
        title: 'Fence lines and access on rural property',
        body: 'On big rural tracts, fence lines, property lines, and access roads close in with brush fast. We clear clean, consistent strips so you can survey, fence, and keep access open across the property.',
      },
    ],
    nearby: ['conroe', 'splendora', 'panorama-village'],
    faqs: [
      {
        q: 'Do you really come out to Cut and Shoot and the rural east side?',
        a: 'Yes. We clear lots and acreage throughout Cut and Shoot, Grangerland, and the rural country along FM-1314 and FM-2090 east of Conroe. Tell us where the property is, how big it is, and how the access looks and we will come prepared.',
      },
      {
        q: 'I have a large wooded tract out here — what is the most affordable way to clear it?',
        a: 'For big, heavily timbered acreage, forestry mulching is usually the most affordable approach — it grinds the brush and small trees in place across a lot of ground with no haul-off cost, and we can leave the pines and hardwoods standing. We will walk it and recommend the right mix for your land and budget.',
      },
      {
        q: 'Can you clear pasture and fence lines on my rural property?',
        a: 'Yes. Reclaiming overgrown pasture with mulching and clearing fence and property lines are both common jobs for us out here. Tell us how much pasture and how much fence line and we will give you a price by the acre or the job.',
      },
    ],
  },
  {
    slug: 'panorama-village',
    name: 'Panorama Village',
    state: 'TX',
    intro:
      'Panorama Village is a small wooded city built around a golf course just north of Conroe, surrounded by the pine and hardwood country between Conroe and Willis. It is an established, heavily treed community where lots and the surrounding acreage carry tall pines, post oak, and a dense yaupon and brush understory. We clear lots and acreage throughout the Panorama Village area and the wooded country around it, from individual lots to rural tracts toward Willis and the FM-3083 corridor. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence lines, and grub and prep build pads. Because this is an established, well-treed area, most of our work here is selective — clearing the understory and the brush while protecting the mature pines and hardwoods that define the community, plus removing dead, leaning, or storm-damaged trees that have become a hazard. Tell us about the property and what you want done, and we will give you a straight price and a plan that keeps the wooded character intact.',
    neighborhoods: ['Panorama', 'Hodge', 'River Plantation area', 'FM-3083 corridor', 'Carriage Hills', 'Wedgewood'],
    landmarks: ['Panorama Golf Club', 'Conroe', 'Lake Conroe (nearby)', 'I-45 corridor'],
    issues: [
      {
        title: 'Established, heavily treed lots',
        body: 'Panorama Village is a mature, well-wooded community. Most clearing here is selective — opening the understory and clearing brush while protecting the tall pines and hardwoods that give the area its character. We work carefully around the trees you want kept.',
      },
      {
        title: 'Dead, leaning, and storm-damaged trees',
        body: 'In an established treed community, hazard trees are a recurring issue — dead, leaning, or storm-weakened trees near homes and roads that need to come out safely. We remove them and grind the stumps so the spot is clean and safe.',
      },
      {
        title: 'Yaupon and brush understory',
        body: 'Beneath the canopy, yaupon and brush build up into a dense understory. Mulching it out gives you open, walkable, park-like woods while keeping the mature trees — a clean, low-impact way to reclaim a wooded lot.',
      },
    ],
    nearby: ['conroe', 'willis', 'cut-and-shoot'],
    faqs: [
      {
        q: 'Do you clear lots in Panorama Village and the area around it?',
        a: 'Yes. We clear lots and acreage in Panorama Village and the wooded country between Conroe and Willis, including along the FM-3083 corridor. Tell us where the property is and what you want done and we will confirm and come prepared.',
      },
      {
        q: 'Can you take out a hazardous tree near my house?',
        a: 'Yes. Removing dead, leaning, and storm-damaged trees near homes and roads is part of our work — we drop them safely, even in tight spots near structures, and grind the stump so the spot is clean. Point out the trees you are worried about and we will tell you how we would handle each.',
      },
      {
        q: 'I want to open up my wooded lot but keep the big trees — can you?',
        a: 'Absolutely. We mulch the yaupon and brush understory and clear only what you want gone, leaving the mature pines and hardwoods standing. The result is open, walkable, park-like woods with the trees that make the lot worth having still in place.',
      },
    ],
  },
  {
    slug: 'stagecoach',
    name: 'Stagecoach',
    state: 'TX',
    intro:
      'Stagecoach is a small rural town in the southwest corner of Montgomery County, off FM-1774 between Magnolia and Pinehurst, in heavily wooded country full of acreage homesites and small ranches. The land is classic southwest-county timber — tall pines, post oak, sweetgum, and a thick yaupon and brush understory — on rolling, generally well-drained ground. We clear lots and acreage throughout the Stagecoach area, from wooded homesites to small ranches and tracts along and off FM-1774. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence and property lines, and grub and prep build pads. Folks out here come for the trees and the room, so most of our work is selective clearing that opens the homesite, drive, and pasture while keeping the mature pines and hardwoods. We also do a lot of fence-line, pasture, and access clearing as people define and use their acreage. Tell us the acreage, what is growing on it, and your goal, and we will give you a straight price and a plan that keeps the wooded, rural feel you bought the land for.',
    neighborhoods: ['Decker Prairie', 'Pinehurst area', 'Magnolia area', 'FM-1774 corridor', 'Nichols Sawmill', 'Spring Creek'],
    landmarks: ['FM-1774 corridor', 'Texas Renaissance Festival (nearby)', 'Spring Creek', 'Magnolia'],
    issues: [
      {
        title: 'Wooded acreage homesites and small ranches',
        body: 'Stagecoach land is mostly wooded acreage and small ranches. We do selective clearing that opens the homesite, drive, and pasture while keeping the tall pines and hardwoods, so you get usable ground without losing the trees and room that drew you out here.',
      },
      {
        title: 'Pasture and fence lines on acreage',
        body: 'As people use their Stagecoach acreage, pasture grows up in yaupon and scrub and fence lines close in. Mulching reclaims pasture to open ground, and we clear clean strips along fence and property lines for surveying and fencing.',
      },
      {
        title: 'Thick understory under the pines',
        body: 'Beneath the pines and oaks, yaupon and brush form a dense understory that makes the woods impassable. Mulching it out gives you open, walkable, park-like woods with the big trees still standing.',
      },
    ],
    nearby: ['magnolia', 'pinehurst', 'dobbin'],
    faqs: [
      {
        q: 'Do you clear land in Stagecoach and along FM-1774?',
        a: 'Yes. We clear lots and acreage throughout the Stagecoach area and the FM-1774 corridor between Magnolia and Pinehurst. Tell us where the property is and what is on it and we will confirm and come prepared.',
      },
      {
        q: 'Can you clear my homesite and pasture but keep the trees?',
        a: 'Yes — that is most of what we do here. We open the homesite, drive, and pasture and mulch the understory while leaving the tall pines and hardwoods that give the property its value and shade. Walk it with us and mark what you want kept.',
      },
      {
        q: 'I need pasture reclaimed and a fence line cleared — do you do both?',
        a: 'We do. Mulching overgrown pasture back to open ground and clearing clean strips along fence and property lines are both common jobs out here. Tell us how much pasture and how much fence line and we will price it by the acre or the job.',
      },
    ],
  },
  {
    slug: 'dobbin',
    name: 'Dobbin',
    state: 'TX',
    intro:
      'Dobbin is a small rural community in the western part of Montgomery County, out along FM-1486 and FM-1097 west of Lake Conroe and Montgomery, in open, rolling country that runs to large acreage, ranches, and timber tracts. The land out here is a mix of pine and hardwood woods, old pasture, and brushy ground, with big tracts that have room to spread out. We clear lots and acreage throughout the Dobbin area, from ranches and large rural tracts to homesites along FM-1486 and FM-1097. We forestry mulch underbrush, remove brush and trees, grind stumps, clear fence and property lines, and grub and prep build pads. With the large, often partly open tracts common out here, our work ranges from full forestry mulching of brushy timber land to reclaiming overgrown pasture and clearing miles of fence line. Folks out this way are working their land — pasture, ranch, and homesites — so we clear to usable ground and keep the trees and character they want. Tell us the acreage and what you are after and we will give you an honest price by the acre or the job.',
    neighborhoods: ['Montgomery area', 'FM-1486 corridor', 'FM-1097 corridor', 'Richards area', 'Keenan', 'Dacus'],
    landmarks: ['Sam Houston National Forest (nearby)', 'Lake Conroe (nearby)', 'FM-1486', 'Montgomery'],
    issues: [
      {
        title: 'Large ranches and acreage tracts',
        body: 'Dobbin is big-acreage ranch and timber country. Our work here ranges from forestry mulching brushy woods across a lot of ground to reclaiming pasture and clearing long fence lines — at a scale that suits large tracts, priced by the acre or the job.',
      },
      {
        title: 'Pasture gone back to brush',
        body: 'Plenty of land out here is old pasture grown up in yaupon and scrub. Mulching reclaims it to open, usable pasture without a haul-off bill, and for areas you want kept clear we can grub the roots. We match the work to how you are using the land.',
      },
      {
        title: 'Long fence and property lines',
        body: 'On big rural tracts, fence lines and property lines run long and close in with brush. We clear clean, consistent strips the full length so you can survey, fence, and keep boundaries and access open.',
      },
    ],
    nearby: ['montgomery', 'magnolia', 'stagecoach'],
    faqs: [
      {
        q: 'Do you clear land in Dobbin and the rural west side of the county?',
        a: 'Yes. We clear lots, ranches, and acreage throughout the Dobbin area along FM-1486 and FM-1097 west of Montgomery and Lake Conroe. Tell us how big the tract is and what is on it and we will confirm and come prepared for the access.',
      },
      {
        q: 'I have a large ranch tract to clear — how do you price that?',
        a: 'For large acreage we typically price by the acre for mulching and brush work, or by the job for a defined clear-and-grub. The cost depends on what is growing — light brush and mulching is far cheaper per acre than thick timber and full grubbing. We walk it and give you a real number before any equipment shows up.',
      },
      {
        q: 'Can you reclaim overgrown pasture and clear my fence lines?',
        a: 'Yes — both are bread-and-butter jobs out here. We mulch overgrown pasture back to open ground and clear clean strips along your fence and property lines for surveying and fencing. Tell us the acreage and the length of fence line and we will price it.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
