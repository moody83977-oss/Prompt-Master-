import { MasterPromptData } from '../types';

export const MASTER_PRESETS: MasterPromptData[] = [
  {
    id: 'neo-noir-detective',
    title: 'The Interrogation Chamber (Ang Huling Pagsisiyasat)',
    category: 'Neo-Noir / Psychological Thriller',
    directorStyle: 'David Fincher & Roger Deakins',
    logline: 'An exhausted homicide detective stares across a steel table at 3:14 AM, fighting the creeping realization that the killer in front of him knows his darkest secret.',
    taglineTagalog: 'Hindi nagsisisigaw ang totoong takot—ito ay nasa panginginig ng panga, pawis sa sentido, at paglunok ng katotohanan.',
    masterPromptMidjourney: `Cinematic 35mm film still from a neo-noir psychological thriller directed by David Fincher and Roger Deakins. Extreme medium close-up shot of a weary 45-year-old homicide detective sitting across a scratched metal interrogation table. Authentic human method acting: heavy bags under bloodshot eyes, delicate involuntary twitch in masseter jaw muscle, raw skin texture with visible open pores, uneven stubble, light beads of oily sweat glistening on forehead under hot practical tungsten desk lamp. Chapped dry lips slightly parted in tense exhaustion. Wearing a rumpled damp charcoal trench coat with wrinkled collar. Smoky atmospheric haze catching hard top-down directional lighting, deep chiaroscuro shadows, high contrast. Shot on 35mm Kodak Vision3 500T 5219 film stock, subtle organic film grain ISO 500, Panavision C-Series 50mm T1.4 anamorphic lens, shallow depth of field, authentic optical horizontal streak, dark desaturated olive and amber cinema color grade --ar 2.39:1 --style raw --v 6.1 --s 250`,
    masterPromptVideoAI: `Cinematic slow dolly-in on a tired detective's face across an interrogation table. The character maintains intense eye contact, but his throat visibly swallows under tension, followed by a slight tremor in his lower eyelid. He slowly exhales cigarette smoke through his nose, chest rising and falling with shallow, ragged breaths. Hand with bruised knuckles nervously taps a battered silver lighter against the metal table. Arri Alexa 35 with Panavision Anamorphic prime, 24fps cinematic motion cadence, 180-degree shutter, naturalistic human micro-expressions, zero CGI plastic smoothness.`,
    directorVision: `Avoid dramatic theatrical screaming. Ground the scene in absolute Stanislavski method realism: the actor is holding back tremendous panic behind an icy professional mask. The human eyes reveal the truth through micro-saccades and irregular breathing.`,
    characterActingBreakdown: {
      microExpressions: 'Involuntary tightening of the cheek and corner of the mouth; eyelid fluttering once before fixing into a locked, defensive stare; throat muscle contracting during an uneasy dry swallow.',
      bodyLanguageAndBlocking: 'One shoulder hunched forward defensively; right hand clamped tightly around a disposable paper cup, slowly crushing the rim; slight tremor in fingertips.',
      skinAndHumanTexture: 'Un-retouched dermal texture: visible pores around the T-zone, humid perspiration sheen, authentic uneven skin pigment, broken capillaries around nostrils, fine fatigue wrinkles around eyes.',
      emotionalSubtext: 'The desperate attempt to project authority and control while experiencing internal terror that his guilt has been exposed.'
    },
    cinematographySpecs: {
      camera: 'Panaflex Millennium XL2 35mm Motion Picture Camera',
      lens: 'Panavision C-Series 50mm T1.4 Anamorphic with subtle barrel distortion',
      lighting: 'Overhead 500W practical photoflood through aluminum shade; low-key chiaroscuro with 8:1 contrast ratio and deep shadow falloff',
      colorGrading: 'Kodak 5219 Vision3, muted steel-green shadows, warm sickly amber highlights, rich organic silver-halide grain structure',
      aspectRatio: '2.39:1 Anamorphic Cinemascope'
    },
    dialogueSnippet: {
      speaker: 'Det. Santos',
      line: 'Sabihin mo sa akin... ilang gabi ka nang hindi nakakatulog dahil sa ginawa mo?',
      deliveryDirection: '(Mahinang boses ngunit matalim, pigil ang panginginig ng hininga, diretso ang titig na puno ng lamat)'
    },
    negativePrompt: 'plastic airbrushed skin, CGI render, 3D model, mannequin face, oversaturated anime, glossy beauty filter, perfect teeth, symmetrical doll face, blur, fake reflections, videogame render'
  },
  {
    id: 'philippine-rain-realism',
    title: 'Midnight Rain at Quiapo (Hatinggabi sa Ilalim ng Ulan)',
    category: 'Grounded Neorealism / Filipino Indie',
    directorStyle: 'Brillante Mendoza & Lav Diaz & Christopher Doyle',
    logline: 'A wet market porter stands sheltered under a dripping corrugated metal roof at midnight, staring at the crumpled hospital bill in his calloused, trembling hands.',
    taglineTagalog: 'Ang totoong pelikula ay amoy ulan, basang aspalto, at may bigat ng buhay sa bawat kurap ng mata.',
    masterPromptMidjourney: `Cinematic 35mm film still from a raw gritty neorealist cinema drama set in midnight Manila. Intimate candid medium close-up of a weathered 38-year-old Filipino laborer sheltering under a rusty corrugated tin roof during a monsoon downpour. True human acting realism: soaking wet hair plastered to his forehead with individual loose strands, authentic humid skin texture glistening with a blend of tropical sweat and raindrops, tired sunken dark circles, weathered laugh lines turned bitter, cracked chapped lips held tightly shut. Clasping a folded soggy piece of paper with calloused grease-stained hands. Background of wet asphalt reflecting blurred tungsten sodium-vapor streetlights and neon green pharmacy signage. Captured on Arri Alexa Mini LF with Cooke Anamorphic/i 40mm lens, natural 35mm film grain, low light naturalism, raw documentary feel, authentic human vulnerability, cinematic master shot --ar 2.39:1 --style raw --v 6.1 --s 200`,
    masterPromptVideoAI: `Handheld cinematic camera movement with subtle natural human operator sway. The laborer looks down at the paper in his hands, his chest heaving with heavy, silent breaths. Rainwater drips steadily off his jawline. As thunder rumbles in the distance, his jaw tightens and his eyes well up with natural glossy moisture, yet he refuses to let a tear fall, forcefully wiping his face with the back of his soaked forearm. Natural 24fps motion, authentic atmospheric rain physics, zero artificial stabilization.`,
    directorVision: `Pure cinéma vérité. We are not watching an actor perform; we are observing a real human being at the threshold of despair. The physical environment (rain, humidity, harsh sodium light) leaves a visceral mark on his body.`,
    characterActingBreakdown: {
      microExpressions: 'Rapid blinking to clear rainwater and suppressed tears; corners of mouth twitching downwards before biting the inner lower lip; heavy flare of nostrils during deep intake of humid night air.',
      bodyLanguageAndBlocking: 'Hunched shoulders protecting the fragile document from splashing puddles; weight shifted forward onto worn rubber boots; posture showing years of physical labor.',
      skinAndHumanTexture: 'Authentic Southeast Asian sun-baked complexion, prominent skin pores, fine rain droplets clinging to facial peach fuzz, small scar on left eyebrow, natural uneven skin pigmentation.',
      emotionalSubtext: 'The unbearable weight of helplessness; the internal calculation of how much sacrifice a single person can endure before breaking.'
    },
    cinematographySpecs: {
      camera: 'Arri Alexa Mini LF (Large Format Sensor)',
      lens: 'Cooke Anamorphic/i Full Frame Plus 40mm T2.3',
      lighting: 'Available practical street lighting: 2200K high-pressure sodium streetlight mixed with 5600K distant neon reflection on wet puddles',
      colorGrading: 'Naturalistic indie cinema grade, deep charcoal blacks, warm humid gold and murky teal highlights, organic medium grain',
      aspectRatio: '2.39:1 Anamorphic Cinemascope'
    },
    dialogueSnippet: {
      speaker: 'Kanor',
      line: 'Kahit anong kayod ko araw-araw... bakit kulang pa rin para sa buhay mo, anak?',
      deliveryDirection: '(Pabulong, basag ang boses, nanginginig ang mga labi habang pinupunasan ang basang mukha)'
    },
    negativePrompt: 'airbrushed skin, western stock photo model, anime, porcelain face, fake smile, studio studio portrait lighting, 3D render, cartoonish, perfect manicure, oversaturated'
  },
  {
    id: 'wong-kar-wai-melancholy',
    title: 'The Stairwell of Regret (Usok at Pagsisisi)',
    category: 'Romantic Melancholy / Hong Kong New Wave',
    directorStyle: 'Wong Kar-wai & Christopher Doyle',
    logline: 'Two lovers who can never be together pass each other on a cramped tiled stairwell, their unspoken grief lingering in the drifting blue cigarette smoke.',
    taglineTagalog: 'Sa pelikula ng buhay, ang pinakamasakit na eksena ay yung titig na walang karapatang magsalita.',
    masterPromptMidjourney: `Cinematic 35mm film still from an auteur romantic art-house drama directed by Wong Kar-wai, shot by Christopher Doyle. Intimate over-the-shoulder close-up of a 32-year-old woman turning her head in a narrow claustrophobic stairwell lined with green vintage tiles. Acting like a real human being: profound melancholy in her eyes, moist glassy sclera catching subtle emerald neon reflection, slight hesitant parted lips as if about to speak but stopping herself, natural skin texture with delicate fine lines, faint smear of faded red lipstick, stray wisps of hair damp with humid evening air. Swirling cigarette smoke illuminated by a practical tungsten pendant lamp. Shot on Fuji Eterna 500T 35mm film, step-printing aesthetic, sensual motion blur, Cooke Speed Panchro vintage lens, rich painterly emerald and amber color palette, vintage cinematic grain --ar 2.39:1 --style raw --v 6.1 --s 300`,
    masterPromptVideoAI: `Cinematic step-printed slow motion (12fps printed to 24fps). The camera glides past the character as she pauses on the stair landing. Her eyes follow someone off-camera with lingering heartache; her chest rises in a deep, melancholic sigh that subtly parts her lips. The cigarette smoke curls delicately across her cheek, catching the amber light. Realistic micro-hesitation in her step, natural human longing and social restraint.`,
    directorVision: `The core of the scene is 'the space between two heartbeats'. The character must not look like an ad model, but like a woman who has spent three years suffocating her true desires to maintain dignity.`,
    characterActingBreakdown: {
      microExpressions: 'Subtle dilation of pupils upon meeting someone’s gaze; slight tremor in the throat; gaze dropping after a split second of intense vulnerability, masking emotion behind composed stillness.',
      bodyLanguageAndBlocking: 'One hand lightly grazing the cool tiled wall for grounding; fingers slowly releasing tension; spine held rigidly upright despite emotional devastation.',
      skinAndHumanTexture: 'Natural human beauty without digital perfection: soft real skin pores, slight fatigue shadow under the inner eye corner, subtle warmth on the cheeks, natural skin sheen.',
      emotionalSubtext: 'Saying goodbye forever without being allowed to utter a single word.'
    },
    cinematographySpecs: {
      camera: 'Arriflex 535B 35mm Cine Camera',
      lens: 'Cooke Speed Panchro 50mm T2.3 Series II Vintage Lens',
      lighting: 'Overhead 40W bare tungsten bulb with deep green bounced ambient from tiled walls; soft rim light catching cigarette haze',
      colorGrading: 'Fuji Eterna 500T aesthetic, saturated jade-green shadows, warm nostalgic yellow-gold midtones, velvety grain',
      aspectRatio: '2.39:1 Anamorphic Cinemascope'
    },
    dialogueSnippet: {
      speaker: 'Maya',
      line: 'Kung sakaling magtanong sila kung nagkita tayo rito... sabihin mo, nagkamali lang sila ng akala.',
      deliveryDirection: '(Mahina at malamig, ngunit nanginginig ang dulo ng boses sa pigil na pag-iyak)'
    },
    negativePrompt: 'wax face, porcelain skin, plastic doll, anime, 3D CGI, perfect smooth skin, glossy studio beauty headshot, lifeless stare, oversaturated'
  },
  {
    id: 'deep-space-isolation',
    title: 'The Silent Orbit (Sa Dulo ng Kalawakan)',
    category: 'Hard Sci-Fi / Existential Drama',
    directorStyle: 'Denis Villeneuve & Christopher Nolan (Interstellar / Arrival)',
    logline: 'An astronaut inside a claustrophobic airlock realizes the tether has snapped, staring out through the visor at the infinite abyss of silence.',
    taglineTagalog: 'Sa gitna ng milyon-milyong bituin, maririnig mo ang pinakamalakas na tunog sa mundo: ang sarili mong mabilis na paghinga.',
    masterPromptMidjourney: `Cinematic 70mm IMAX film still from a grounded hard science-fiction masterpiece directed by Denis Villeneuve and Christopher Nolan. Extreme close-up inside an EVA spacesuit helmet focusing on an astronaut’s face. Pure human terror and psychological isolation: wide dilated pupils reflecting distant cold blue celestial light and emergency red cockpit LEDs, cold condensation and fog building on the inner curved glass from rapid terrified breathing, droplets of cold sweat dripping down the bridge of an authentic crooked nose, visible chapped dry lips, natural skin pores, fine peach fuzz, raw human acting expression of shock mixed with quiet realization of mortality. Shot on 65mm IMAX camera with custom Panavision Primo lenses, pristine optical clarity combined with 70mm natural photochemical grain, desaturated muted monochrome palette with razor-sharp specular highlights --ar 2.39:1 --style raw --v 6.1 --s 250`,
    masterPromptVideoAI: `Intimate interior helmet camera angle. Rapid, shallow breath fogs the visor glass with each exhale, then slowly dissipates. The astronaut's eyes dart between instrument monitors, pupils pulsing with adrenaline before slowly locking onto the black void ahead. Throat swallows dryly twice; the lower jaw trembles uncontrollably before he bites down hard to steady himself. Sound of amplified heart rate. Shot on 65mm IMAX sensor, authentic physical lens reflection, zero artificial CGI polish.`,
    directorVision: `Space is not romantic here; it is brutal, indifferent physics. The human being is tiny, fragile, and terrified. We emphasize the biological vulnerability of a human living on synthetic oxygen.`,
    characterActingBreakdown: {
      microExpressions: 'Pupils dilating and contracting with panic; rapid eye saccades searching for hope; teeth clenching until jaw tendons pop; nostril flares synced to panicked respiration.',
      bodyLanguageAndBlocking: 'Neck muscles tensed against the collar ring; helmet moving jerkily as the character tries to look over their shoulder despite rigid suit constraints.',
      skinAndHumanTexture: 'Stressed skin: pale clammy pallor, genuine beads of perspiration pooling at the hairline, slight razor burn on neck, visible pores and natural skin blemishes under cold specular lighting.',
      emotionalSubtext: 'The sudden transition from routine mission protocol to the raw biological survival instinct when facing certain death.'
    },
    cinematographySpecs: {
      camera: 'IMAX MSM 9802 15/70mm Film Camera',
      lens: 'Hasselblad / Panavision System 65 60mm T2.8 Lens',
      lighting: 'Internal helmet LED ring (5600K cool white) mixed with periodic flashing amber emergency beacon (590nm)',
      colorGrading: 'IMAX 70mm color science, deep infinite blacks, high dynamic range specular glints, cool metallic silver tones',
      aspectRatio: '2.39:1 Anamorphic Cinemascope (or 1.43:1 IMAX)'
    },
    dialogueSnippet: {
      speaker: 'Commander Cross',
      line: 'Houston... naputol yung safety tether. Umuusad na ako palayo sa estasyon. Naririnig niyo ba ako?',
      deliveryDirection: '(Mabilis at kinakapos na hininga, basag ang boses, may tunog ng static sa radyo)'
    },
    negativePrompt: 'cartoon, plastic skin, CGI astronaut, video game screenshot, anime, smooth porcelain face, clean studio model, render, low resolution, fake glass'
  }
];

export const DIRECTORS = [
  { name: 'David Fincher & Roger Deakins', desc: 'Precision framing, low-key chiaroscuro, desaturated greens & amber, obsessive realism' },
  { name: 'Denis Villeneuve & Greig Fraser', desc: 'Monolithic scale, intimate human vulnerability, naturalistic diffused light, 65mm' },
  { name: 'Wong Kar-wai & Christopher Doyle', desc: 'Sensual step-printing, neon reflection, deep romantic melancholy, rich grain' },
  { name: 'Brillante Mendoza & Lav Diaz', desc: 'Raw Philippine neorealism, humid tropical texture, handheld immediacy, documentary truth' },
  { name: 'Christopher Nolan & Hoyte van Hoytema', desc: '70mm IMAX grandeur, practical physical reality, visceral human acting, high dynamic range' },
  { name: 'Bong Joon-ho & Hong Kyung-pyo', desc: 'Social tension, micro-choreographed acting, sharp class contrast, meticulous pacing' },
  { name: 'Alfonso Cuarón & Emmanuel Lubezki', desc: 'Unbroken fluid takes, naturalistic available light, intimate proximity to characters' }
];

export const GENRES = [
  'Neo-Noir Psychological Thriller',
  'Grounded Neorealist Drama (Pinoy / Indie)',
  'Auteur Romantic Melancholy',
  'Hard Sci-Fi / Deep Space Realism',
  'Gritty Period / War Realism',
  'Urban Crime & Heist Tension',
  'Intimate Family Secret / Drama',
  'Supernatural Realism / Psychological Horror'
];

export const HUMAN_FLAW_PRESETS = [
  { label: 'Tired Eyes & Pores', value: 'Bloodshot sclera, dark under-eye fatigue circles, visible dermal pores around T-zone, natural skin oils' },
  { label: 'Humid Sweat & Stray Hair', value: 'Perspiration sheen on temples, stray loose hair strands caught on damp skin, flushed cheeks' },
  { label: 'Trembling Lip & Clenched Jaw', value: 'Involuntary muscle twitch in masseter jaw, trembling lower lip, tight neck tendons from suppressed weeping' },
  { label: 'Weathered Laborer', value: 'Sun-baked skin, fine crow\'s feet, faint forehead scar, dry cracked lips, rough stubble' },
  { label: 'Cold Shock & Clammy Pale', value: 'Clammy pale pallor, condensation on breath, dilated pupils with frantic micro-saccades, dry swallowing' }
];

export const CAMERA_PRESETS = [
  { label: 'Panavision 35mm Anamorphic', value: 'Panavision C-Series 50mm T1.4 Anamorphic, 35mm Kodak Vision3 500T film stock, organic grain' },
  { label: 'Arri Alexa 65 Large Format', value: 'Arri Alexa 65 with Prime 65mm T1.8, razor-sharp natural human texture, smooth cinematic roll-off' },
  { label: 'Cooke Speed Panchro Vintage 35mm', value: 'Cooke Speed Panchro vintage lenses, gentle optical glow, creamy bokeh, warm nostalgia' },
  { label: 'Super 16mm Gritty Indie', value: 'Arriflex 16SR3, Super 16mm Kodak Vision3 250D, gritty tactile grain, documentary realism' },
  { label: 'IMAX 70mm Cinema Rig', value: 'IMAX 15/70mm 65mm camera, pristine optical depth, grand human scale against massive space' }
];

export const LIGHTING_PRESETS = [
  { label: 'Low-Key Chiaroscuro', value: 'High contrast chiaroscuro, single practical key light, deep black falloff, moody Rembrandt triangle' },
  { label: 'Humid Neon & Wet Asphalt', value: 'Reflected neon street lighting on wet asphalt, soft ambient cyan & magenta bounce, rain haze' },
  { label: 'Golden Hour Soft Rim', value: 'Low raking warm late-afternoon sun, natural rim light separating subject, soft dust motes' },
  { label: 'Flickering Fluorescent', value: 'Harsh industrial 4000K fluorescent tube, subtle green tint, raw unromanticized shadows' },
  { label: 'Intimate Tungsten 2800K', value: 'Warm 2800K bedside or table lamp, soft enveloping shadows, gentle eye sparkle' }
];
