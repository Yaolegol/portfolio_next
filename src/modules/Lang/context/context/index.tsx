'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

export interface IContextData {
  label: string;
  value: string;
}

export interface IContext {
  data?: IContextData;
  setData?: Dispatch<SetStateAction<IContextData | undefined>>;
}

export type TContext = IContext | undefined;

export const LangContext = createContext<TContext>(undefined);
