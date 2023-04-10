export interface Hotel {
  code: string;
  name: string;
}

export interface Breakdown {
  [date: string]: {
    price: string;
    availability: number;
  };
}

export interface Rates {
  [rateCode: string]: {
    name: string;
    breakdown: Breakdown;
  };
}

export interface RoomAvailability {
  name: string;
  rates: Rates;
}

export interface RoomsAvailability {
  [roomCode: string]: RoomAvailability;
}
