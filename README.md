# Moaicode
Moaicode is an unofficial esoteric programming language for https://gdcolon.com/%F0%9F%97%BF.

## Commands
Make sure to put a semi**colon** after every command! Before every command and after every semi**colon**, there must be either no space, a CRLF instruction or a space.

- `Sound [ID] [Pitch]`
  - `[ID]` is the ID of the sound to be played
  - `[Pitch]` is the amount of semitones of pitch of the sound to be played
- `Loop [Amount]`
  - `[Amount]` is the number of times that the commands between `LoopPoint` and `Loop` are gonna play
- `LoopPoint`
  - Makes a loop point for the `Loop` command.
- `BPM [Amount] [Action]`
  - This is fairly hard to describe with my not-so-good English, so I'll show you an example and I'll hope you understand:
    - `BPM 50 +` will add 50 BPM to the current speed
    - `BPM 2 x` will double the speed
    - `BPM 120 =` will set the BPM to 120
