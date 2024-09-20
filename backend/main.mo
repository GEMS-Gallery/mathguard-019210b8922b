import Nat "mo:base/Nat";

actor {
  public query func add() : async Nat {
    return 2 + 2;
  };
}
