export function override( prefix?: string, symbol?: string | boolean ): void;

export declare const Dang: {
  black( chars?: string ): string;
  b_black( chars?: string ): string;
  bg_black( chars?: string ): string;
  b_bg_black( chars?: string ): string;
  blue( chars?: string ): string;
  b_blue( chars?: string ): string;
  bg_blue( chars?: string ): string;
  b_bg_blue( chars?: string ): string;
  color( code?: number, chars?: string ): string;
  bg_color( code?: number, chars?: string ): string;
  cyan( chars?: string ): string;
  b_cyan( chars?: string ): string;
  bg_cyan( chars?: string ): string;
  b_bg_cyan( chars?: string ): string;
  green( chars?: string ): string;
  b_green( chars?: string ): string;
  bg_green( chars?: string ): string;
  b_bg_green( chars?: string ): string;
  magenta( chars?: string ): string;
  b_magenta( chars?: string ): string;
  bg_magenta( chars?: string ): string;
  b_bg_magenta( chars?: string ): string;
  negative( chars?: string ): string;
  red( chars?: string ): string;
  b_red( chars?: string ): string;
  bg_red( chars?: string ): string;
  b_bg_red( chars?: string ): string;
  rgb( code?: RGB, chars?: string ): string;
  bg_rgb( code?: RGB, chars?: string ): string;
  strong( chars?: string ): string;
  underline( chars?: string ): string;
  white( chars?: string ): string;
  b_white( chars?: string ): string;
  bg_white( chars?: string ): string;
  b_bg_white( chars?: string ): string;
  yellow( chars?: string ): string;
  b_yellow( chars?: string ): string;
  bg_yellow( chars?: string ): string;
  b_bg_yellow( chars?: string ): string;
}

declare global {

  interface String {
    black( chars?: string ): string
    blue( chars?: string ): string
    color( code?: number, chars?: string ) : string
    cyan( chars?: string ): string
    green( chars?: string ): string
    magenta( chars?: string ): string
    red( chars?: string ): string
    negative( chars?: string ): string
    rgb( code?: RGB, chars?: string ) : string
    strong( chars?: string ): string
    underline( chars?: string ): string
    white( chars?: string ): string
    yellow( chars?: string ): string
    bg_color( code?: number, chars?: string ) : string
    bg_rgb( code?: RGB, chars?: string ) : string
    b_black( chars?: string ): string
    b_bg_black( chars?: string ): string
    bg_black( chars?: string ): string
    b_blue( chars?: string ): string
    b_bg_blue( chars?: string ): string
    bg_blue( chars?: string ): string
    b_cyan( chars?: string ): string
    b_bg_cyan( chars?: string ): string
    bg_cyan( chars?: string ): string
    b_green( chars?: string ): string
    b_bg_green( chars?: string  ): string
    bg_green( chars?: string ): string
    b_magenta( chars?: string ): string
    b_bg_magenta( chars?: string ): string
    bg_magenta( chars?: string ): string
    b_red( chars?: string ): string
    b_bg_red( chars?: string ): string
    bg_red( chars?: string ): string
    b_white( chars?: string ): string
    b_bg_white( chars?: string ): string
    bg_white( chars?: string ): string
    b_yellow( chars?: string ): string
    b_bg_yellow( chars?: string ): string
    bg_yellow( chars?: string ): string
  }
}

declare type RGBValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255;

type RGB = [
  r: RGBValues,
  g: RGBValues,
  b: RGBValues
];

declare type ANSI = {
  black: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  blue: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  color: {
    foreground: string,
    background: string
  },
  cyan: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  green: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  magenta: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  negative: {
    code: string
  },
  red: {
    foreground: string
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  rgb: {
    foreground: string,
    background: string
  },
  strong: {
    code: string
  },
  underline: {
    code: string
  },
  white: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  },
  yellow: {
    foreground: string,
    brightForeground: string,
    background: string,
    brightBackground: string
  }
}
