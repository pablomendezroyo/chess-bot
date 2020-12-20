export interface Player {
  id: string; // the location of this profile (always self-referencing)
  url: string; // the chess.com user's profile page (the username is displayed with the original letter case)
  username: string; // the username of this player
  player_id: number; // the non-changing Chess.com ID of this player
  title: string; // (optional) abbreviation of chess title, if any
  status: string; // account status: closed, closed:fair_play_violations, basic, premium, mod, staff
  name: string; // (optional) the personal first and last name
  avatar: string; // (optional) URL of a 200x200 image
  location: string; // (optional) the city or location
  country: string; // API location of this player's country's profile
  joined: number; // timestamp of registration on Chess.com 1178556600
  last_online: number; // timestamp of the most recent login 1500661803
  followers: number; // the number of players tracking this player's activity 17
  is_streamer: boolean; //if the member is a Chess.com streamer
  twitch_url: string;
  fide: number; // FIDE rating
}

export interface PlayerStats {
  chess_daily?: ChessDaily;
  chess960_daily?: Chess960Daily;
  chess_blitz?: ChessBlitz;
  chess_rapid?: ChessRapid;
  chess_bullet?: ChessBullet;
  fide?: number;
  tactics: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  lessons: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  puzzle_rush: {
    daily?: {
      total_attempts: number;
      score: number;
    };
    best: {
      total_attempts: number;
      score: number;
    };
  };
}

export interface ChessDaily extends GameType {}
export interface Chess960Daily extends GameType {}
export interface ChessBlitz extends GameType {}
export interface ChessRapid extends GameType {}
export interface ChessBullet extends GameType {}

export type GameTypes =
  | "chess_daily"
  | "chess_rapid"
  | "chess_bullet"
  | "chess_blitz";

export type IsGame =
  | Chess960Daily
  | ChessBlitz
  | ChessBullet
  | ChessDaily
  | ChessRapid;

export interface GameType {
  last: {
    // the current stats
    date: number; // timestamp of the last rated game finished 1509709165
    rating: number; // most-recent rating 1642
    rd: number; // the Glicko "RD" value used to calculate ratings changes 58
  };
  best?: {
    // the best rating achieved by a win
    date: number; // timestamp of the best-win game 1256228875
    rating: number; // highest rating achieved 2065
    game: string; // URL of the best-win game "URL"
  };
  record: {
    // summary of all games played
    win: number; // number of games won
    loss: number; // number of games lost
    draw: number; // number of games drawn
    time_per_move: number; // integer number of seconds per average move number 18799
    timeout_percent: number; // timeout percentage in the last 90 days9.99
  };
  tournament: {
    // summary of tournaments participated in
    count: number; // number of tournaments joined 20
    withdraw: number; // number of tournaments withdrawn from
    points: number; // total number of points earned in tournaments
    highest_finish: number; // best tournament place
  };
}
