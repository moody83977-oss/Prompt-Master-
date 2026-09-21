export interface CharacterActingBreakdown {
  microExpressions: string;
  bodyLanguageAndBlocking: string;
  skinAndHumanTexture: string;
  emotionalSubtext: string;
}

export interface CinematographySpecs {
  camera: string;
  lens: string;
  lighting: string;
  colorGrading: string;
  aspectRatio: string;
}

export interface DialogueSnippet {
  speaker: string;
  line: string;
  deliveryDirection: string;
}

export interface MasterPromptData {
  id?: string;
  title: string;
  logline: string;
  taglineTagalog?: string;
  masterPromptMidjourney: string;
  masterPromptVideoAI: string;
  directorVision: string;
  characterActingBreakdown: CharacterActingBreakdown;
  cinematographySpecs: CinematographySpecs;
  dialogueSnippet?: DialogueSnippet;
  negativePrompt: string;
  category?: string;
  directorStyle?: string;
}

export interface GeneratorFormState {
  sceneIdea: string;
  genre: string;
  directorStyle: string;
  characterMood: string;
  characterFlaws: string;
  cameraGear: string;
  lightingStyle: string;
  language: 'taglish' | 'tagalog' | 'english';
}
