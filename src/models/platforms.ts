export interface PlatformWithGameCount {
  title: string;
  games: number;
}

export const platformNames = new Map(
  Object.entries({
    PCE: "NEC PC Engine",
    "3DS": "Nintendo 3DS",
    Amiga: "Commodore Amiga",
    "Amiga 500": "Commodore Amiga 500",
    "AMSTRAD CPC": "Amstrad CPC",
    C64: "Commodore 64",
    DC: "SEGA Dreamcast",
    DS: "Nintendo DS",
    FDS: "Nintendo Famicom Disk System",
    "FM TOWNS": "Fujitsu FM Towns Marty",
    GB: "Nintendo Game Boy",
    GBA: "Nintendo Game Boy Advance",
    MD: "SEGA Megadrive",
    "MD MINI": "SEGA Megadrive Mini",
    "MEGA CD": "SEGA Mega CD",
    MS: "SEGA Master System",
    MSX: "Microsoft MSX",
    "TAITO G-NET": "TAITO G-NET",
    "WINDOWS PHONE": "Microsoft Windows Phone",
    N64: "Nintendo 64",
    NES: "Nintendo NES",
    NG: "SNK NEO·GEO",
    NGCD: "SNK NEO·GEO CD",
    NGPC: "SNK NEO·GEO Pocket Color",
    "PC-88": "NEC PC-88",
    "PC-98": "NEC PC-98",
    PCB: "PCB",
    MAME: "MAME",
    "Atari ST": "Atari ST",
    OUYA: "OUYA",
    PC: "PC",
    PCECD: "NEC PC Engine CD",
    PS1: "Sony PlayStation",
    PS2: "Sony PlayStation 2",
    PS3: "Sony PlayStation 3",
    PS4: "Sony PlayStation 4",
    PS5: "Sony PlayStation 5",
    PSN: "Sony PlayStation Network",
    PSP: "Sony PlayStation Portable",
    SAT: "SEGA Saturn",
    SNES: "Nintendo Super NES",
    SWITCH: "Nintendo Switch",
    VC: "Nintendo Virtual Console",
    Vectrex: "Smith Engineering Vectrex",
    VITA: "Sony Playstation Vita",
    WII: "Nintendo Wii",
    WIIU: "Nintendo Wii U",
    WONDERSWAN: "Bandai WonderSwan",
    X360: "Microsoft Xbox 360",
    X68000: "Sharp X68000",
    XBOX: "Microsoft Xbox",
    XONE: "Microsoft Xbox One",
    "ZX SPECTRUM": "Sinclair Research ZX Spectrum",
    iOS: "Apple iOS",
    GG: "SEGA Game Gear",
    GC: "Nintendo GameCube",
    SGX: "NEC Supergrafx",
  })
);
