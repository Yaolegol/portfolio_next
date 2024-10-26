type TStyle = string | undefined;

export const stylesConcat = (...args: TStyle[]): string => {
  return args.join(' ');
};
