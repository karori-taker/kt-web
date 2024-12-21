import type { NutritionRecord } from './model';
import type { WritableAtom, Atom } from 'nanostores';

export interface NutritionRecordService {
  readonly store: Atom<NutritionRecord[]>;
  append(record: NutritionRecord): void;
  remove(i: number): void;
}

export class NutritionRecordServiceImpl implements NutritionRecordService {
  public get store(): Atom<NutritionRecord[]> {
    return this._store;
  }

  private readonly _store: WritableAtom<NutritionRecord[]>;

  constructor(store: WritableAtom<NutritionRecord[]>) {
    this._store = store;
  }

  append(record: NutritionRecord): void {
    this._store.set([...this._store.get(), record]);
  }

  remove(i: number): void {
    const records = this._store.get();

    if (i < 0 || i >= records.length) {
      throw new Error(`Index out of bounds: ${i}`);
    }

    this._store.set([...records.slice(0, i), ...records.slice(i + 1)]);
  }
}
