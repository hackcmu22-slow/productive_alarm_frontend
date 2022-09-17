import * as React from "react";

export enum PlayState {
    LOOP, PLAY_ONCE, PAUSED
}

const SoundContext = React.createContext<
  [PlayState, (_: PlayState) => void]
>([PlayState.PAUSED, () => {}]);

export default SoundContext;
