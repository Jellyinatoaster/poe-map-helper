import { POECharacter } from '@/models/PathOfExileAPI';

export interface UserState {
  logged: boolean;
  poesessid: string | undefined;
  loading: boolean;
  characters: POECharacter[];
}

export const state: UserState = {
  logged: false,
  poesessid: undefined,
  loading: false,
  characters: []
};
