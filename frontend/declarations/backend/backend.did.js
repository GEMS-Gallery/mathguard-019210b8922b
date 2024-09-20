export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'add' : IDL.Func([], [IDL.Nat], ['query']) });
};
export const init = ({ IDL }) => { return []; };
