/**
 * Dá»® LIá»†U BÃ€I Há»ŒC Sá» MÃ”N TOÃN THPT (Lá»šP 10 - 11 - 12)
 * Bá»˜ SÃCH GIÃO KHOA "Káº¾T Ná»I TRI THá»¨C Vá»šI CUá»˜C Sá»NG"
 * BiÃªn soáº¡n vÃ  chuáº©n hÃ³a: ThS. LÆ°Æ¡ng Thanh SÃ¡ng (THPT Nguyá»…n VÄƒn Thoáº¡i, Thoáº¡i SÆ¡n, An Giang)
 * =========================================================================================
 * Cáº¥u trÃºc 3 táº§ng:
 * - Táº§ng 1: Khá»‘i lá»›p (10, 11, 12)
 * - Táº§ng 2: ChÆ°Æ¡ng / BÃ i há»c (Táº­p 1 & Táº­p 2)
 * - Táº§ng 3: Khung tiÃªu Ä‘á» cÃ¡c Má»¥c (Má»¥c 1, Má»¥c 2...) vÃ  cÃ¡c khung phá»¥ a), b), c)...
 */

const LESSONS_DATABASE = {
  "10": {
    grade: "10",
    gradeTitle: "ToÃ¡n Lá»›p 10",
    subtitle: "ChÆ°Æ¡ng trÃ¬nh GDPT 2018 â€¢ Bá»™ sÃ¡ch Káº¿t ná»‘i tri thá»©c vá»›i cuá»™c sá»‘ng",
    chapters: [
      {
        id: "c10-1",
        number: "ChÆ°Æ¡ng I",
        title: "Má»‡nh Ä‘á» vÃ  táº­p há»£p",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "10-c1-b1",
            number: "BÃ i 1",
            title: "Má»‡nh Ä‘á»",
            sections: [
              {
                id: "10-c1-b1-s1",
                num: "1",
                title: "Má»‡nh Ä‘á», má»‡nh Ä‘á» chá»©a biáº¿n",
                subsections: [
                  { key: "a", title: "Má»‡nh Ä‘á»", summary: "KhÃ¡i niá»‡m vÃ  Ä‘á»‹nh nghÄ©a má»‡nh Ä‘á» logic, má»‡nh Ä‘á» Ä‘Ãºng, má»‡nh Ä‘á» sai." },
                  { key: "b", title: "Má»‡nh Ä‘á» chá»©a biáº¿n", summary: "CÃ¢u kháº³ng Ä‘á»‹nh chá»©a biáº¿n vÃ  cÃ¡ch xÃ¡c Ä‘á»‹nh tÃ­nh Ä‘Ãºng sai khi gÃ¡n giÃ¡ trá»‹ cá»¥ thá»ƒ cho biáº¿n." }
                ]
              },
              {
                id: "10-c1-b1-s2",
                num: "2",
                title: "Má»‡nh Ä‘á» phá»§ Ä‘á»‹nh",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a má»‡nh Ä‘á» phá»§ Ä‘á»‹nh", summary: "KÃ­ hiá»‡u gáº¡ch Ä‘áº§u vÃ  má»‘i quan há»‡ chÃ¢n trá»‹ Ä‘Ãºng - sai giá»¯a má»‡nh Ä‘á» ban Ä‘áº§u vÃ  phá»§ Ä‘á»‹nh." },
                  { key: "b", title: "CÃ¡ch thÃ nh láº­p má»‡nh Ä‘á» phá»§ Ä‘á»‹nh", summary: "Quy táº¯c thÃªm hoáº·c bá»›t tá»« phá»§ Ä‘á»‹nh 'khÃ´ng', 'khÃ´ng pháº£i' vÃ  vÃ­ dá»¥ minh há»a." }
                ]
              },
              {
                id: "10-c1-b1-s3",
                num: "3",
                title: "Má»‡nh Ä‘á» kÃ©o theo, má»‡nh Ä‘á» Ä‘áº£o",
                subsections: [
                  { key: "a", title: "Má»‡nh Ä‘á» kÃ©o theo", summary: "Cáº¥u trÃºc 'Náº¿u P thÃ¬ Q' (kÃ­ hiá»‡u P => Q), Ä‘iá»u kiá»‡n cáº§n vÃ  Ä‘iá»u kiá»‡n Ä‘á»§." },
                  { key: "b", title: "Má»‡nh Ä‘á» Ä‘áº£o", summary: "KhÃ¡i niá»‡m má»‡nh Ä‘á» Ä‘áº£o 'Q => P' vÃ  phÃ¢n tÃ­ch tÃ­nh Ä‘Ãºng sai cá»§a má»‡nh Ä‘á» Ä‘áº£o." }
                ]
              },
              {
                id: "10-c1-b1-s4",
                num: "4",
                title: "Má»‡nh Ä‘á» tÆ°Æ¡ng Ä‘Æ°Æ¡ng",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a má»‡nh Ä‘á» tÆ°Æ¡ng Ä‘Æ°Æ¡ng", summary: "Cáº¥u trÃºc 'P khi vÃ  chá»‰ khi Q' (kÃ­ hiá»‡u P <=> Q)." },
                  { key: "b", title: "Äiá»u kiá»‡n cáº§n vÃ  Ä‘á»§", summary: "Ã nghÄ©a toÃ¡n há»c cá»§a Ä‘iá»u kiá»‡n cáº§n vÃ  Ä‘á»§ trong cÃ¡c Ä‘á»‹nh lÃ½ hÃ¬nh há»c vÃ  Ä‘áº¡i sá»‘." }
                ]
              },
              {
                id: "10-c1-b1-s5",
                num: "5",
                title: "KÃ­ hiá»‡u vá»›i má»i (âˆ€) vÃ  tá»“n táº¡i (âˆƒ)",
                subsections: [
                  { key: "a", title: "KÃ­ hiá»‡u vá»›i má»i (âˆ€)", summary: "CÃ¡ch biá»ƒu Ä‘áº¡t má»‡nh Ä‘á» chá»©a lÆ°á»£ng tá»« 'vá»›i má»i' vÃ  xÃ©t tÃ­nh Ä‘Ãºng sai." },
                  { key: "b", title: "KÃ­ hiá»‡u tá»“n táº¡i (âˆƒ)", summary: "CÃ¡ch biá»ƒu Ä‘áº¡t má»‡nh Ä‘á» chá»©a lÆ°á»£ng tá»« 'tá»“n táº¡i Ã­t nháº¥t' vÃ  phá»§ Ä‘á»‹nh cá»§a cÃ¡c má»‡nh Ä‘á» chá»©a âˆ€, âˆƒ." }
                ]
              }
            ]
          },
          {
            id: "10-c1-b2",
            number: "BÃ i 2",
            title: "Táº­p há»£p vÃ  cÃ¡c phÃ©p toÃ¡n trÃªn táº­p há»£p",
            sections: [
              {
                id: "10-c1-b2-s1",
                num: "1",
                title: "CÃ¡c khÃ¡i niá»‡m cÆ¡ báº£n vá» táº­p há»£p",
                subsections: [
                  { key: "a", title: "Táº­p há»£p vÃ  pháº§n tá»­", summary: "KÃ­ hiá»‡u thuá»™c, khÃ´ng thuá»™c, cÃ¡ch biá»ƒu diá»…n táº­p há»£p báº±ng liá»‡t kÃª hoáº·c nÃªu tÃ­nh cháº¥t Ä‘áº·c trÆ°ng." },
                  { key: "b", title: "Táº­p há»£p con vÃ  táº­p rá»—ng", summary: "KhÃ¡i niá»‡m táº­p con (A âŠ‚ B), táº­p há»£p rá»—ng (âˆ…) vÃ  sÆ¡ Ä‘á»“ Ven." },
                  { key: "c", title: "Hai táº­p há»£p báº±ng nhau", summary: "Äá»‹nh nghÄ©a hai táº­p há»£p báº±ng nhau khi A âŠ‚ B vÃ  B âŠ‚ A." }
                ]
              },
              {
                id: "10-c1-b2-s2",
                num: "2",
                title: "CÃ¡c táº­p há»£p sá»‘",
                subsections: [
                  { key: "a", title: "CÃ¡c táº­p há»£p sá»‘ Ä‘Ã£ há»c", summary: "Quan há»‡ giá»¯a cÃ¡c táº­p há»£p sá»‘ tá»± nhiÃªn N, sá»‘ nguyÃªn Z, sá»‘ há»¯u tá»‰ Q vÃ  sá»‘ thá»±c R." },
                  { key: "b", title: "CÃ¡c táº­p con thÆ°á»ng dÃ¹ng cá»§a R", summary: "KhÃ¡i niá»‡m vÃ  biá»ƒu diá»…n trÃªn trá»¥c sá»‘: khoáº£ng, Ä‘oáº¡n, ná»­a khoáº£ng." }
                ]
              },
              {
                id: "10-c1-b2-s3",
                num: "3",
                title: "CÃ¡c phÃ©p toÃ¡n trÃªn táº­p há»£p",
                subsections: [
                  { key: "a", title: "Giao cá»§a hai táº­p há»£p", summary: "Äá»‹nh nghÄ©a phÃ©p giao (A âˆ© B), biá»ƒu diá»…n sÆ¡ Ä‘á»“ Ven vÃ  tÃ¬m giao cÃ¡c khoáº£ng, Ä‘oáº¡n." },
                  { key: "b", title: "Há»£p cá»§a hai táº­p há»£p", summary: "Äá»‹nh nghÄ©a phÃ©p há»£p (A âˆª B), biá»ƒu diá»…n sÆ¡ Ä‘á»“ Ven vÃ  tÃ¬m há»£p cÃ¡c khoáº£ng, Ä‘oáº¡n." },
                  { key: "c", title: "Hiá»‡u vÃ  pháº§n bÃ¹ cá»§a hai táº­p há»£p", summary: "Äá»‹nh nghÄ©a hiá»‡u (A \\ B), pháº§n bÃ¹ (C_E A) vÃ  cÃ¡c bÃ i toÃ¡n thá»±c tiá»…n." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-2",
        number: "ChÆ°Æ¡ng II",
        title: "Báº¥t phÆ°Æ¡ng trÃ¬nh vÃ  há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "10-c2-b3",
            number: "BÃ i 3",
            title: "Báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n",
            sections: [
              {
                id: "10-c2-b3-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n",
                subsections: [
                  { key: "a", title: "Dáº¡ng tá»•ng quÃ¡t", summary: "Dáº¡ng ax + by <= c (hoáº·c <, >=, >) vá»›i a, b khÃ´ng Ä‘á»“ng thá»i báº±ng 0." },
                  { key: "b", title: "Nghiá»‡m cá»§a báº¥t phÆ°Æ¡ng trÃ¬nh", summary: "KhÃ¡i niá»‡m cáº·p sá»‘ (x0; y0) lÃ  nghiá»‡m cá»§a báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n." }
                ]
              },
              {
                id: "10-c2-b3-s2",
                num: "2",
                title: "Biá»ƒu diá»…n miá»n nghiá»‡m trÃªn máº·t pháº³ng toáº¡ Ä‘á»™",
                subsections: [
                  { key: "a", title: "ÄÆ°á»ng tháº³ng bá» cá»§a miá»n nghiá»‡m", summary: "Váº½ Ä‘Æ°á»ng tháº³ng ax + by = c chia máº·t pháº³ng toáº¡ Ä‘á»™ thÃ nh hai ná»­a máº·t pháº³ng Ä‘á»‘i nhau." },
                  { key: "b", title: "Quy táº¯c xÃ¡c Ä‘á»‹nh miá»n nghiá»‡m", summary: "PhÆ°Æ¡ng phÃ¡p chá»n Ä‘iá»ƒm kiá»ƒm tra (thÆ°á»ng chá»n gá»‘c toáº¡ Ä‘á»™ O) vÃ  gáº¡ch bá» miá»n khÃ´ng thÃ­ch há»£p." }
                ]
              }
            ]
          },
          {
            id: "10-c2-b4",
            number: "BÃ i 4",
            title: "Há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n",
            sections: [
              {
                id: "10-c2-b4-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh", summary: "Há»‡ gá»“m hai hay nhiá»u báº¥t phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hai áº©n x, y." },
                  { key: "b", title: "Nghiá»‡m cá»§a há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh", summary: "Cáº·p sá»‘ (x0; y0) Ä‘á»“ng thá»i lÃ  nghiá»‡m cá»§a táº¥t cáº£ cÃ¡c báº¥t phÆ°Æ¡ng trÃ¬nh trong há»‡." }
                ]
              },
              {
                id: "10-c2-b4-s2",
                num: "2",
                title: "Biá»ƒu diá»…n miá»n nghiá»‡m cá»§a há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh",
                subsections: [
                  { key: "a", title: "Giao cá»§a cÃ¡c miá»n nghiá»‡m", summary: "PhÆ°Æ¡ng phÃ¡p biá»ƒu diá»…n tá»«ng miá»n nghiá»‡m vÃ  láº¥y pháº§n giao khÃ´ng bá»‹ gáº¡ch." },
                  { key: "b", title: "CÃ¡c dáº¡ng miá»n nghiá»‡m thÆ°á»ng gáº·p", summary: "Miá»n Ä‘a giÃ¡c tam giÃ¡c, tá»© giÃ¡c, ngÅ© giÃ¡c hoáº·c miá»n khÃ´ng giá»›i háº¡n." }
                ]
              },
              {
                id: "10-c2-b4-s3",
                num: "3",
                title: "á»¨ng dá»¥ng trong bÃ i toÃ¡n thá»±c táº¿",
                subsections: [
                  { key: "a", title: "MÃ´ hÃ¬nh hoÃ¡ toÃ¡n há»c bÃ i toÃ¡n kinh táº¿", summary: "Thiáº¿t láº­p há»‡ báº¥t phÆ°Æ¡ng trÃ¬nh tá»« bÃ i toÃ¡n káº¿ hoáº¡ch sáº£n xuáº¥t, dinh dÆ°á»¡ng, chi phÃ­." },
                  { key: "b", title: "TÃ¬m giÃ¡ trá»‹ lá»›n nháº¥t, nhá» nháº¥t cá»§a biá»ƒu thá»©c F(x; y)", summary: "Äá»‹nh lÃ­ giÃ¡ trá»‹ tá»‘i Æ°u luÃ´n Ä‘áº¡t Ä‘Æ°á»£c táº¡i cÃ¡c Ä‘á»‰nh cá»§a miá»n Ä‘a giÃ¡c nghiá»‡m." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-3",
        number: "ChÆ°Æ¡ng III",
        title: "Há»‡ thá»©c lÆ°á»£ng trong tam giÃ¡c",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "10-c3-b5",
            number: "BÃ i 5",
            title: "GiÃ¡ trá»‹ lÆ°á»£ng giÃ¡c cá»§a má»™t gÃ³c tá»« 0Â° Ä‘áº¿n 180Â°",
            sections: [
              {
                id: "10-c3-b5-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a giÃ¡ trá»‹ lÆ°á»£ng giÃ¡c",
                subsections: [
                  { key: "a", title: "Ná»­a Ä‘Æ°á»ng trÃ²n Ä‘Æ¡n vá»‹", summary: "Ná»­a Ä‘Æ°á»ng trÃ²n tÃ¢m O bÃ¡n kÃ­nh R = 1 náº±m phÃ­a trÃªn trá»¥c hoÃ nh." },
                  { key: "b", title: "Äá»‹nh nghÄ©a sin, cos, tan, cot", summary: "XÃ¡c Ä‘á»‹nh giÃ¡ trá»‹ lÆ°á»£ng giÃ¡c qua toáº¡ Ä‘á»™ (x0; y0) cá»§a Ä‘iá»ƒm M trÃªn ná»­a Ä‘Æ°á»ng trÃ²n." }
                ]
              },
              {
                id: "10-c3-b5-s2",
                num: "2",
                title: "Má»‘i quan há»‡ giá»¯a cÃ¡c giÃ¡ trá»‹ lÆ°á»£ng giÃ¡c cá»§a hai gÃ³c bÃ¹ nhau",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c hai gÃ³c bÃ¹ nhau", summary: "sin(180Â° - Î±) = sin Î±; cos(180Â° - Î±) = -cos Î±; tan(180Â° - Î±) = -tan Î±." },
                  { key: "b", title: "Báº£ng giÃ¡ trá»‹ lÆ°á»£ng giÃ¡c cá»§a má»™t sá»‘ gÃ³c Ä‘áº·c biá»‡t", summary: "CÃ¡c gÃ³c 0Â°, 30Â°, 45Â°, 60Â°, 90Â°, 120Â°, 135Â°, 150Â°, 180Â°." }
                ]
              }
            ]
          },
          {
            id: "10-c3-b6",
            number: "BÃ i 6",
            title: "Há»‡ thá»©c lÆ°á»£ng trong tam giÃ¡c",
            sections: [
              {
                id: "10-c3-b6-s1",
                num: "1",
                title: "Äá»‹nh lÃ­ cÃ´sin",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c Ä‘á»‹nh lÃ­ cÃ´sin", summary: "aÂ² = bÂ² + cÂ² - 2bc cos A; bÂ² = aÂ² + cÂ² - 2ac cos B; cÂ² = aÂ² + bÂ² - 2ab cos C." },
                  { key: "b", title: "Há»‡ quáº£ tÃ­nh gÃ³c vÃ  Ä‘á»™ dÃ i Ä‘Æ°á»ng trung tuyáº¿n", summary: "CÃ´ng thá»©c tÃ­nh cos A, cos B, cos C vÃ  cÃ´ng thá»©c Ä‘Æ°á»ng trung tuyáº¿n ma, mb, mc." }
                ]
              },
              {
                id: "10-c3-b6-s2",
                num: "2",
                title: "Äá»‹nh lÃ­ sin",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c Ä‘á»‹nh lÃ­ sin", summary: "a / sin A = b / sin B = c / sin C = 2R." },
                  { key: "b", title: "Má»‘i liÃªn há»‡ vá»›i bÃ¡n kÃ­nh Ä‘Æ°á»ng trÃ²n ngoáº¡i tiáº¿p", summary: "á»¨ng dá»¥ng tÃ­nh bÃ¡n kÃ­nh R vÃ  tÃ­nh cÃ¡c cáº¡nh khi biáº¿t hai gÃ³c vÃ  má»™t cáº¡nh." }
                ]
              },
              {
                id: "10-c3-b6-s3",
                num: "3",
                title: "Giáº£i tam giÃ¡c vÃ  á»©ng dá»¥ng thá»±c táº¿",
                subsections: [
                  { key: "a", title: "CÃ¡c cÃ´ng thá»©c tÃ­nh diá»‡n tÃ­ch tam giÃ¡c", summary: "S = 1/2 a.ha = 1/2 ab sin C = abc/(4R) = pr = âˆš(p(p-a)(p-b)(p-c))." },
                  { key: "b", title: "á»¨ng dá»¥ng Ä‘o Ä‘áº¡c thá»±c táº¿", summary: "Äo khoáº£ng cÃ¡ch tá»›i Ä‘iá»ƒm khÃ´ng tá»›i Ä‘Æ°á»£c, Ä‘o chiá»u cao thÃ¡p, ngá»n nÃºi." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-4",
        number: "ChÆ°Æ¡ng IV",
        title: "VectÆ¡",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "10-c4-b7",
            number: "BÃ i 7",
            title: "CÃ¡c khÃ¡i niá»‡m má»Ÿ Ä‘áº§u",
            isFeaturedLesson: true,
            teacherWelcome: {
              greetingText: "Tháº§y SÃ¡ng chÃ o táº¥t cáº£ cÃ¡c em há»c sinh thÃ¢n yÃªu! Tháº§y ráº¥t vui khi Ä‘Æ°á»£c Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c em trong tiáº¿t há»c sá»‘ ngÃ y hÃ´m nay. BÆ°á»›c vÃ o lá»›p 10, cÃ¡c em sáº½ báº¯t Ä‘áº§u má»™t hÃ nh trÃ¬nh má»›i Ä‘áº§y há»©ng khá»Ÿi vá»›i mÃ´n ToÃ¡n. BÃ i 7 hÃ´m nay, 'CÃ¡c khÃ¡i niá»‡m má»Ÿ Ä‘áº§u vá» VectÆ¡', sáº½ má»Ÿ ra má»™t cÃ´ng cá»¥ toÃ¡n há»c vÃ´ cÃ¹ng ká»³ diá»‡u gáº¯n liá»n vá»›i Ä‘á»i sá»‘ng thá»±c táº¿ vÃ  mÃ´n Váº­t lÃ½. TrÆ°á»›c khi Tháº§y trÃ² mÃ¬nh cÃ¹ng nhau khÃ¡m phÃ¡, cÃ¡c em hÃ£y cÃ¹ng Tháº§y Ä‘iá»ƒm qua cÃ¡c má»¥c tiÃªu quan trá»ng cáº§n Ä‘áº¡t trong bÃ i há»c nÃ y nhÃ©: Thá»© nháº¥t, cÃ¡c em sáº½ hiá»ƒu rÃµ tháº¿ nÃ o lÃ  má»™t Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng, xÃ¡c Ä‘á»‹nh Ä‘iá»ƒm Ä‘áº§u, Ä‘iá»ƒm cuá»‘i vÃ  Ä‘á»™ dÃ i vectÆ¡. Thá»© hai, náº¯m vá»¯ng khÃ¡i niá»‡m giÃ¡ cá»§a vectÆ¡, nháº­n biáº¿t hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng vÃ  ngÆ°á»£c hÆ°á»›ng. Thá»© ba, hiá»ƒu tháº¿ nÃ o lÃ  hai vectÆ¡ báº±ng nhau vÃ  Ä‘áº·c Ä‘iá»ƒm cá»§a vectÆ¡-khÃ´ng. Tháº§y chÃºc cÃ¡c em cÃ³ má»™t buá»•i há»c tháº­t say mÃª, trÃ n Ä‘áº§y há»©ng khá»Ÿi vÃ  gáº·t hÃ¡i tháº­t nhiá»u kiáº¿n thá»©c bá»• Ã­ch. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng báº¯t Ä‘áº§u nhÃ©!",
              audioScript: "Tháº§y SÃ¡ng chÃ o táº¥t cáº£ cÃ¡c em há»c sinh thÃ¢n yÃªu! Tháº§y ráº¥t vui khi Ä‘Æ°á»£c Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c em trong tiáº¿t há»c sá»‘ ngÃ y hÃ´m nay. BÆ°á»›c vÃ o lá»›p 10, cÃ¡c em sáº½ báº¯t Ä‘áº§u má»™t hÃ nh trÃ¬nh má»›i Ä‘áº§y há»©ng khá»Ÿi vá»›i mÃ´n ToÃ¡n. BÃ i 7 hÃ´m nay, CÃ¡c khÃ¡i niá»‡m má»Ÿ Ä‘áº§u vá» VectÆ¡, sáº½ má»Ÿ ra má»™t cÃ´ng cá»¥ toÃ¡n há»c vÃ´ cÃ¹ng ká»³ diá»‡u gáº¯n liá»n vá»›i Ä‘á»i sá»‘ng thá»±c táº¿ vÃ  mÃ´n Váº­t lÃ½. TrÆ°á»›c khi Tháº§y trÃ² mÃ¬nh cÃ¹ng nhau khÃ¡m phÃ¡, cÃ¡c em hÃ£y cÃ¹ng Tháº§y Ä‘iá»ƒm qua cÃ¡c má»¥c tiÃªu quan trá»ng cáº§n Ä‘áº¡t trong bÃ i há»c nÃ y nhÃ©. Thá»© nháº¥t, cÃ¡c em sáº½ hiá»ƒu rÃµ tháº¿ nÃ o lÃ  má»™t Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng, xÃ¡c Ä‘á»‹nh Ä‘iá»ƒm Ä‘áº§u, Ä‘iá»ƒm cuá»‘i vÃ  Ä‘á»™ dÃ i vectÆ¡. Thá»© hai, náº¯m vá»¯ng khÃ¡i niá»‡m giÃ¡ cá»§a vectÆ¡, nháº­n biáº¿t hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng vÃ  ngÆ°á»£c hÆ°á»›ng. Thá»© ba, hiá»ƒu tháº¿ nÃ o lÃ  hai vectÆ¡ báº±ng nhau vÃ  Ä‘áº·c Ä‘iá»ƒm cá»§a vectÆ¡-khÃ´ng. Tháº§y chÃºc cÃ¡c em cÃ³ má»™t buá»•i há»c tháº­t say mÃª, trÃ n Ä‘áº§y há»©ng khá»Ÿi vÃ  gáº·t hÃ¡i tháº­t nhiá»u kiáº¿n thá»©c bá»• Ã­ch. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng báº¯t Ä‘áº§u nhÃ©!",
              audioUrl: "assets/audio/b7_welcome.mp3"
            },
            learningGoals: [
              "Náº¯m vá»¯ng Ä‘á»‹nh nghÄ©a vectÆ¡ lÃ  Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng, xÃ¡c Ä‘á»‹nh chÃ­nh xÃ¡c Ä‘iá»ƒm Ä‘áº§u, Ä‘iá»ƒm cuá»‘i vÃ  Ä‘á»™ dÃ i vectÆ¡.",
              "Hiá»ƒu rÃµ khÃ¡i niá»‡m giÃ¡ cá»§a vectÆ¡, nháº­n biáº¿t hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng vÃ  ngÆ°á»£c hÆ°á»›ng.",
              "Váº­n dá»¥ng thÃ nh tháº¡o Ä‘iá»u kiá»‡n hai vectÆ¡ báº±ng nhau Ä‘á»ƒ chá»©ng minh cÃ¡c tÃ­nh cháº¥t hÃ¬nh há»c pháº³ng.",
              "Náº¯m vá»¯ng báº£n cháº¥t vÃ  cÃ¡c tÃ­nh cháº¥t quy Æ°á»›c Ä‘áº·c biá»‡t cá»§a vectÆ¡-khÃ´ng."
            ],
            hook: {
              title: "TÃ¬nh huá»‘ng thá»±c táº¿: Hai tÃ u lai dáº¯t kÃ©o tÃ u chá»Ÿ hÃ ng vÃ o cáº£ng",
              story: "Táº¡i cáº£ng biá»ƒn Háº£i PhÃ²ng, má»™t con tÃ u hÃ ng táº£i trá»ng 10.000 táº¥n Ä‘ang chuáº©n bá»‹ cáº­p báº¿n. Do khÃ´ng thá»ƒ tá»± quay Ä‘áº§u trong luá»“ng háº¹p, hai chiáº¿c tÃ u kÃ©o nhá» hÆ¡n Ä‘Æ°á»£c ná»‘i dÃ¢y cÃ¡p vÃ o mÅ©i tÃ u Ä‘á»ƒ kÃ©o. TÃ u kÃ©o A kÃ©o má»™t lá»±c 5.000 N theo hÆ°á»›ng ÄÃ´ng Báº¯c, tÃ u kÃ©o B kÃ©o má»™t lá»±c 5.000 N theo hÆ°á»›ng ÄÃ´ng Nam. Chiáº¿c tÃ u hÃ ng sáº½ di chuyá»ƒn vá» hÆ°á»›ng nÃ o vÃ  chá»‹u tá»•ng lá»±c kÃ©o lÃ  bao nhiÃªu?",
              question: "Táº¡i sao chá»‰ biáº¿t Ä‘á»™ lá»›n cá»§a hai lá»±c lÃ  5.000 N ta váº«n chÆ°a thá»ƒ xÃ¡c Ä‘á»‹nh Ä‘Æ°á»£c hÆ°á»›ng Ä‘i cá»§a tÃ u? Ta cáº§n thÃªm yáº¿u tá»‘ gÃ¬ Ä‘á»ƒ mÃ´ táº£ chÃ­nh xÃ¡c chuyá»ƒn Ä‘á»™ng nÃ y?",
              teacherNote: "ÄÃºng váº­y cÃ¡c em! Trong váº­t lÃ­ vÃ  Ä‘á»i sá»‘ng, cÃ¡c Ä‘áº¡i lÆ°á»£ng nhÆ° lá»±c, váº­n tá»‘c, Ä‘á»™ dá»‹ch chuyá»ƒn khÃ´ng chá»‰ cÃ³ 'Ä‘á»™ lá»›n' mÃ  cÃ²n gáº¯n liá»n vá»›i 'phÆ°Æ¡ng hÆ°á»›ng'. ÄÃ³ lÃ  lÃ­ do toÃ¡n há»c sÃ¡ng táº¡o ra má»™t cÃ´ng cá»¥ cá»±c ká»³ máº¡nh máº½ mang tÃªn: VECTÆ !",
              illustration: "assets/images/lessons/hook_tau_keo.svg",
              illustrationCaption: "Hai tÃ u lai dáº¯t kÃ©o tÃ u hÃ ng lá»›n vÃ o luá»“ng cáº£ng báº±ng hai lá»±c F1 vÃ  F2 Ä‘á»‘i xá»©ng nhau."
            },
            teacherVoiceGeneral: {
              title: "Lá»i giáº£ng cá»§a Tháº§y SÃ¡ng: Giá»›i thiá»‡u khÃ¡i niá»‡m VectÆ¡",
              script: "ChÃ o cÃ¡c em há»c sinh thÃ¢n máº¿n! HÃ´m nay Tháº§y SÃ¡ng sáº½ cÃ¹ng cÃ¡c em bÆ°á»›c vÃ o má»™t tháº¿ giá»›i toÃ¡n há»c hoÃ n toÃ n má»›i â€” tháº¿ giá»›i cá»§a VectÆ¡. CÃ¡c em hÃ£y hÃ¬nh dung, náº¿u trong cuá»™c sá»‘ng cÃ³ nhá»¯ng Ä‘áº¡i lÆ°á»£ng chá»‰ cáº§n má»™t con sá»‘ lÃ  xÃ¡c Ä‘á»‹nh xong, nhÆ° khá»‘i lÆ°á»£ng nÄƒm mÆ°Æ¡i ki-lÃ´-gam hay nhiá»‡t Ä‘á»™ ba mÆ°Æ¡i Ä‘á»™ C. NhÆ°ng cÅ©ng cÃ³ nhá»¯ng Ä‘áº¡i lÆ°á»£ng mÃ  náº¿u thiáº¿u Ä‘i phÆ°Æ¡ng hÆ°á»›ng, chÃºng ta sáº½ hoÃ n toÃ n máº¥t phÆ°Æ¡ng hÆ°á»›ng! Äiá»ƒn hÃ¬nh lÃ  váº­n tá»‘c cá»§a cÆ¡n bÃ£o hay lá»±c kÃ©o cá»§a má»™t con tÃ u. Äá»ƒ mÃ´ táº£ trá»n váº¹n cáº£ Ä‘á»™ lá»›n láº«n chiá»u di chuyá»ƒn, toÃ¡n há»c trang bá»‹ cho chÃºng ta khÃ¡i niá»‡m vectÆ¡ â€” má»™t Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng. Khi ta viáº¿t vectÆ¡ A B cÃ³ mÅ©i tÃªn trÃªn Ä‘áº§u, Ä‘iá»ƒm A Ä‘á»©ng trÆ°á»›c lÃ  Ä‘iá»ƒm xuáº¥t phÃ¡t, Ä‘iá»ƒm B Ä‘á»©ng sau lÃ  Ä‘Ã­ch Ä‘áº¿n, vÃ  khoáº£ng cÃ¡ch giá»¯a A vÃ  B chÃ­nh lÃ  Ä‘á»™ dÃ i cá»§a vectÆ¡ áº¥y. CÃ¡c em hÃ£y cÃ¹ng Tháº§y khÃ¡m phÃ¡ bÃ i há»c Ä‘áº§y lÃ´i cuá»‘n nÃ y nhÃ©!",
              audioUrl: "assets/audio/b7_main_lecture.mp3"
            },
            sections: [
              {
                id: "10-c4-b7-s1",
                num: "1",
                title: "1. KhÃ¡i niá»‡m vectÆ¡",
                subsections: [
                  {
                    key: "a",
                    title: "KhÃ¡i niá»‡m vectÆ¡ & cÃ¡c vÃ­ dá»¥",
                    summary: "VectÆ¡ lÃ  Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng. KÃ½ hiá»‡u Ä‘iá»ƒm Ä‘áº§u, Ä‘iá»ƒm cuá»‘i vÃ  Ä‘á»™ dÃ i vectÆ¡.",
                    illustration: "assets/images/lessons/hinh1_vecto_co_huong.svg",
                    illustrationCaption: "Äoáº¡n tháº³ng cÃ³ hÆ°á»›ng AB: Äiá»ƒm Ä‘áº§u A, Ä‘iá»ƒm cuá»‘i B, Ä‘Æ°á»ng tháº³ng d lÃ  giÃ¡ cá»§a vectÆ¡, Ä‘á»™ dÃ i |AB| = AB.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-bookmark"></i> Äá»‹nh nghÄ©a (SGK Káº¿t ná»‘i tri thá»©c)</div>
                          <p><strong>VectÆ¡</strong> lÃ  má»™t Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng, nghÄ©a lÃ  trong hai Ä‘iá»ƒm mÃºt cá»§a Ä‘oáº¡n tháº³ng Ä‘Ã£ chá»‰ rÃµ Ä‘iá»ƒm nÃ o lÃ  <em>Ä‘iá»ƒm Ä‘áº§u</em>, Ä‘iá»ƒm nÃ o lÃ  <em>Ä‘iá»ƒm cuá»‘i</em>.</p>
                          <p>VectÆ¡ cÃ³ Ä‘iá»ƒm Ä‘áº§u $A$, Ä‘iá»ƒm cuá»‘i $B$ Ä‘Æ°á»£c kÃ½ hiá»‡u lÃ  $\\vec{AB}$ vÃ  Ä‘á»c lÃ  <strong>"vectÆ¡ AB"</strong>.</p>
                          <p>Äá»ƒ váº½ má»™t vectÆ¡ $\\vec{AB}$, ta váº½ Ä‘oáº¡n tháº³ng $AB$ vÃ  Ä‘Ã¡nh dáº¥u mÅ©i tÃªn á»Ÿ Ä‘áº§u mÃºt $B$.</p>
                          <p>VectÆ¡ cÃ²n Ä‘Æ°á»£c kÃ½ hiá»‡u Ä‘Æ¡n giáº£n báº±ng má»™t chá»¯ cÃ¡i thÆ°á»ng cÃ³ mÅ©i tÃªn á»Ÿ trÃªn Ä‘áº§u, vÃ­ dá»¥: $\\vec{a}, \\vec{b}, \\vec{x}, \\vec{u}, \\vec{v}$.</p>
                        </div>
                        <div class="definition-card" style="margin-top: 15px;">
                          <div class="def-badge"><i class="fa-solid fa-ruler-combined"></i> Äá»™ dÃ i cá»§a vectÆ¡</div>
                          <p>Khoáº£ng cÃ¡ch giá»¯a Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i cá»§a vectÆ¡ $\\vec{AB}$ Ä‘Æ°á»£c gá»i lÃ  <strong>Ä‘á»™ dÃ i cá»§a vectÆ¡</strong> $\\vec{AB}$, kÃ½ hiá»‡u lÃ  $|\\vec{AB}|$.</p>
                          <p>NhÆ° váº­y: $|\\vec{AB}| = AB$. Äá»™ dÃ i cá»§a vectÆ¡ $\\vec{a}$ Ä‘Æ°á»£c kÃ½ hiá»‡u lÃ  $|\\vec{a}|$.</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "CÃ¡c em hÃ£y ghi nhá»› tháº­t ká»¹: Khi viáº¿t vectÆ¡ A B, Ä‘iá»ƒm A viáº¿t trÆ°á»›c luÃ´n lÃ  Ä‘iá»ƒm gá»‘c, Ä‘iá»ƒm B viáº¿t sau luÃ´n lÃ  ngá»n mÅ©i tÃªn. Náº¿u Ä‘áº£o láº¡i thÃ nh vectÆ¡ B A thÃ¬ hÆ°á»›ng Ä‘i Ä‘Ã£ hoÃ n toÃ n Ä‘áº£o ngÆ°á»£c má»™t trÄƒm tÃ¡m mÆ°Æ¡i Ä‘á»™ rá»“i Ä‘áº¥y nhÃ©! CÃ²n Ä‘á»™ dÃ i cá»§a vectÆ¡ thÃ¬ chÃ­nh lÃ  khoáº£ng cÃ¡ch hÃ¬nh há»c thÃ´ng thÆ°á»ng giá»¯a hai Ä‘iá»ƒm A vÃ  B, luÃ´n lÃ  má»™t sá»‘ khÃ´ng Ã¢m.",
                    workedExample: {
                      title: "VÃ­ dá»¥ 1: XÃ¡c Ä‘á»‹nh vectÆ¡, giÃ¡ vÃ  Ä‘á»™ dÃ i cá»§a vectÆ¡",
                      problem: "Cho hÃ¬nh vuÃ´ng $ABCD$ cÃ³ cáº¡nh báº±ng $4\\text{ cm}$. XÃ¡c Ä‘á»‹nh cÃ¡c vectÆ¡ cÃ³ Ä‘iá»ƒm Ä‘áº§u lÃ  $A$ vÃ  Ä‘iá»ƒm cuá»‘i lÃ  cÃ¡c Ä‘á»‰nh cÃ²n láº¡i cá»§a hÃ¬nh vuÃ´ng. TÃ­nh Ä‘á»™ dÃ i cá»§a cÃ¡c vectÆ¡ Ä‘Ã³.",
                      thinking: "Äiá»ƒm Ä‘áº§u cá»‘ Ä‘á»‹nh lÃ  A. CÃ¡c Ä‘iá»ƒm cuá»‘i cÃ²n láº¡i lÃ  B, C, D. Äoáº¡n tháº³ng AC lÃ  Ä‘Æ°á»ng chÃ©o hÃ¬nh vuÃ´ng nÃªn Ä‘á»™ dÃ i tÃ­nh theo Ä‘á»‹nh lÃ½ Pythagore.",
                      solution: `
                        <p>1. CÃ¡c vectÆ¡ cÃ³ Ä‘iá»ƒm Ä‘áº§u lÃ  $A$ vÃ  Ä‘iá»ƒm cuá»‘i lÃ  cÃ¡c Ä‘á»‰nh cÃ²n láº¡i gá»“m cÃ³: $\\vec{AB}, \\vec{AC}, \\vec{AD}$.</p>
                        <p>2. TÃ­nh Ä‘á»™ dÃ i cá»§a cÃ¡c vectÆ¡:</p>
                        <ul>
                          <li>$|\\vec{AB}| = AB = 4\\text{ cm}$.</li>
                          <li>$|\\vec{AD}| = AD = 4\\text{ cm}$.</li>
                          <li>VÃ¬ $ABCD$ lÃ  hÃ¬nh vuÃ´ng nÃªn tam giÃ¡c $ABC$ vuÃ´ng táº¡i $B$. Theo Ä‘á»‹nh lÃ­ Pythagore:
                          $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{4^2 + 4^2} = 4\\sqrt{2}\\text{ cm}$
                          Do Ä‘Ã³ $|\\vec{AC}| = AC = 4\\sqrt{2}\\text{ cm}$.</li>
                        </ul>
                      `,
                      teacherGuidance: "CÃ¡c em lÆ°u Ã½: Khi Ä‘á» bÃ i yÃªu cáº§u tÃ¬m vectÆ¡, ta pháº£i chá»‰ rÃµ cáº£ tÃªn vectÆ¡ vÃ  mÅ©i tÃªn. VectÆ¡ Ä‘Æ°á»ng chÃ©o AC luÃ´n cÃ³ Ä‘á»™ dÃ i lá»›n hÆ¡n cÃ¡c vectÆ¡ cáº¡nh AB vÃ  AD theo Ä‘Ãºng tá»‰ lá»‡ cÄƒn báº­c hai cá»§a 2.",
                      audioScript: "Trong vÃ­ dá»¥ má»™t, Ä‘iá»ƒm Ä‘áº§u lÃ  A thÃ¬ cÃ¡c vectÆ¡ táº¡o thÃ nh láº§n lÆ°á»£t lÃ  vectÆ¡ A B, vectÆ¡ A C vÃ  vectÆ¡ A D. Äá»™ dÃ i cá»§a vectÆ¡ A B vÃ  A D báº±ng cáº¡nh hÃ¬nh vuÃ´ng lÃ  4 xÄƒng-ti-mÃ©t. RiÃªng vectÆ¡ A C lÃ  Ä‘Æ°á»ng chÃ©o hÃ¬nh vuÃ´ng nÃªn Ä‘á»™ dÃ i báº±ng 4 nhÃ¢n cÄƒn báº­c hai cá»§a 2 xÄƒng-ti-mÃ©t cÃ¡c em nhÃ©!"
                    }
                  },
                  {
                    key: "b",
                    title: "VectÆ¡ cÃ¹ng phÆ°Æ¡ng, vectÆ¡ cÃ¹ng hÆ°á»›ng",
                    summary: "KhÃ¡i niá»‡m giÃ¡ cá»§a vectÆ¡ vÃ  Ä‘iá»u kiá»‡n hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng, ngÆ°á»£c hÆ°á»›ng.",
                    illustration: "assets/images/lessons/hinh2_cung_phuong_cung_huong.svg",
                    illustrationCaption: "Hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng khi giÃ¡ song song hoáº·c trÃ¹ng nhau; cÃ¹ng hÆ°á»›ng hoáº·c ngÆ°á»£c hÆ°á»›ng; 3 Ä‘iá»ƒm tháº³ng hÃ ng.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-graduation-cap"></i> KhÃ¡i niá»‡m cá»‘t lÃµi</div>
                          <p><strong>GiÃ¡ cá»§a vectÆ¡:</strong> ÄÆ°á»ng tháº³ng Ä‘i qua Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i cá»§a má»™t vectÆ¡ Ä‘Æ°á»£c gá»i lÃ  <em>giÃ¡</em> cá»§a vectÆ¡ Ä‘Ã³.</p>
                          <p><strong>Hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng:</strong> Hai vectÆ¡ Ä‘Æ°á»£c gá»i lÃ  <em>cÃ¹ng phÆ°Æ¡ng</em> náº¿u giÃ¡ cá»§a chÃºng song song hoáº·c trÃ¹ng nhau.</p>
                        </div>
                        <div class="note-box">
                          <i class="fa-solid fa-lightbulb"></i> <strong>Äáº·c biá»‡t lÆ°u Ã½:</strong>
                          <p>Náº¿u hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng thÃ¬ chÃºng chá»‰ cÃ³ thá»ƒ hoáº·c lÃ  <strong>cÃ¹ng hÆ°á»›ng</strong>, hoáº·c lÃ  <strong>ngÆ°á»£c hÆ°á»›ng</strong>.</p>
                          <p><strong>Äiá»u kiá»‡n ba Ä‘iá»ƒm tháº³ng hÃ ng:</strong> Ba Ä‘iá»ƒm phÃ¢n biá»‡t $A, B, C$ tháº³ng hÃ ng khi vÃ  chá»‰ khi hai vectÆ¡ $\\vec{AB}$ vÃ  $\\vec{AC}$ cÃ¹ng phÆ°Æ¡ng.</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "CÃ¡c em hÃ£y hÃ¬nh dung giÃ¡ cá»§a vectÆ¡ giá»‘ng nhÆ° Ä‘Æ°á»ng ray xe lá»­a mÃ  vectÆ¡ Ä‘ang cháº¡y trÃªn Ä‘Ã³. Hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng nghÄ©a lÃ  hai Ä‘Æ°á»ng ray cá»§a chÃºng song song vá»›i nhau hoáº·c trÃ¹ng lÃ m má»™t. VÃ  má»™t khi Ä‘Ã£ cÃ¹ng cháº¡y trÃªn hai Ä‘Æ°á»ng ray song song, thÃ¬ hai Ä‘oÃ n tÃ u chá»‰ cÃ³ hai kháº£ nÄƒng: hoáº·c lÃ  cháº¡y cÃ¹ng chiá»u vá» phÃ­a trÆ°á»›c â€” ta gá»i lÃ  cÃ¹ng hÆ°á»›ng; hoáº·c lÃ  má»™t Ä‘oÃ n tÃ u cháº¡y lÃªn phÃ­a báº¯c, Ä‘oÃ n kia cháº¡y xuá»‘ng phÃ­a nam â€” ta gá»i lÃ  ngÆ°á»£c hÆ°á»›ng!",
                    workedExample: {
                      title: "VÃ­ dá»¥ 2: XÃ¡c Ä‘á»‹nh vectÆ¡ cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng",
                      problem: "Cho hÃ¬nh bÃ¬nh hÃ nh $ABCD$. HÃ£y chá»‰ ra cÃ¡c vectÆ¡ cÃ³ Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i lÃ  cÃ¡c Ä‘á»‰nh cá»§a hÃ¬nh bÃ¬nh hÃ nh cÃ¹ng phÆ°Æ¡ng vá»›i vectÆ¡ $\\vec{AB}$. Trong Ä‘Ã³ nhá»¯ng vectÆ¡ nÃ o cÃ¹ng hÆ°á»›ng, nhá»¯ng vectÆ¡ nÃ o ngÆ°á»£c hÆ°á»›ng vá»›i $\\vec{AB}$?",
                      thinking: "Dá»±a vÃ o tÃ­nh cháº¥t cáº¡nh Ä‘á»‘i cá»§a hÃ¬nh bÃ¬nh hÃ nh: AB // CD vÃ  AB, CD lÃ  cÃ¡c Ä‘oáº¡n tháº³ng cÃ¹ng phÆ°Æ¡ng.",
                      solution: `
                        <p>GiÃ¡ cá»§a vectÆ¡ $\\vec{AB}$ lÃ  Ä‘Æ°á»ng tháº³ng $AB$. VÃ¬ $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn $AB // CD$. Do Ä‘Ã³:</p>
                        <ul>
                          <li>CÃ¡c vectÆ¡ cÃ¹ng phÆ°Æ¡ng vá»›i $\\vec{AB}$ lÃ : $\\vec{BA}$, $\\vec{CD}$ vÃ  $\\vec{DC}$.</li>
                          <li>VectÆ¡ <strong>cÃ¹ng hÆ°á»›ng</strong> vá»›i $\\vec{AB}$ (hÆ°á»›ng tá»« trÃ¡i sang pháº£i) lÃ : $\\vec{DC}$.</li>
                          <li>CÃ¡c vectÆ¡ <strong>ngÆ°á»£c hÆ°á»›ng</strong> vá»›i $\\vec{AB}$ (hÆ°á»›ng tá»« pháº£i sang trÃ¡i) lÃ : $\\vec{BA}$ vÃ  $\\vec{CD}$.</li>
                        </ul>
                      `,
                      teacherGuidance: "Tháº§y lÆ°u Ã½ cÃ¡c em ráº¥t hay nháº§m láº«n giá»¯a vectÆ¡ CD vÃ  DC. VectÆ¡ DC cÃ³ mÅ©i tÃªn tá»« D sang C cÃ¹ng chiá»u vá»›i tá»« A sang B nÃªn cÃ¹ng hÆ°á»›ng vá»›i AB. CÃ²n vectÆ¡ CD thÃ¬ ngÆ°á»£c chiá»u nÃªn ngÆ°á»£c hÆ°á»›ng vá»›i AB!",
                      audioScript: "CÃ¡c em chÃº Ã½ nhÃ©: Trong hÃ¬nh bÃ¬nh hÃ nh A B C D, vectÆ¡ cÃ¹ng hÆ°á»›ng vá»›i vectÆ¡ A B lÃ  vectÆ¡ D C. CÃ²n vectÆ¡ B A vÃ  vectÆ¡ C D cÃ³ chiá»u mÅ©i tÃªn ngÆ°á»£c láº¡i nÃªn lÃ  hai vectÆ¡ ngÆ°á»£c hÆ°á»›ng vá»›i vectÆ¡ A B."
                    }
                  }
                ]
              },
              {
                id: "10-c4-b7-s2",
                num: "2",
                title: "2. Hai vectÆ¡ báº±ng nhau vÃ  VectÆ¡-khÃ´ng",
                subsections: [
                  {
                    key: "a",
                    title: "Hai vectÆ¡ báº±ng nhau",
                    summary: "Äiá»u kiá»‡n hai vectÆ¡ báº±ng nhau: cÃ¹ng hÆ°á»›ng vÃ  cÃ¹ng Ä‘á»™ dÃ i.",
                    illustration: "assets/images/lessons/hinh3_vecto_bang_nhau.svg",
                    illustrationCaption: "HÃ¬nh bÃ¬nh hÃ nh ABCD: VectÆ¡ AB = VectÆ¡ DC, VectÆ¡ AD = VectÆ¡ BC; VectÆ¡ AB khÃ¡c VectÆ¡ CD (ngÆ°á»£c hÆ°á»›ng).",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-equals"></i> Äá»‹nh nghÄ©a hai vectÆ¡ báº±ng nhau</div>
                          <p>Hai vectÆ¡ $\\vec{a}$ vÃ  $\\vec{b}$ Ä‘Æ°á»£c gá»i lÃ  <strong>báº±ng nhau</strong> náº¿u chÃºng cÃ³ <strong>cÃ¹ng hÆ°á»›ng</strong> vÃ  <strong>cÃ¹ng Ä‘á»™ dÃ i</strong>, kÃ½ hiá»‡u lÃ  $\\vec{a} = \\vec{b}$.</p>
                          <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 10px 15px; margin: 10px 0; border-radius: 4px;">
                            $\\vec{a} = \\vec{b} \\iff \\begin{cases} \\vec{a} \\text{ cÃ¹ng hÆ°á»›ng vá»›i } \\vec{b} \\\\ |\\vec{a}| = |\\vec{b}| \\end{cases}$
                          </div>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Tháº§y muá»‘n cÃ¡c em kháº¯c sÃ¢u Ä‘iá»u nÃ y: Hai sá»‘ báº±ng nhau thÃ¬ chá»‰ cáº§n cÃ¹ng giÃ¡ trá»‹. NhÆ°ng hai vectÆ¡ muá»‘n báº±ng nhau thÃ¬ pháº£i thá»a mÃ£n cáº£ hai tiÃªu chuáº©n kháº¯t khe: Vá»«a pháº£i cÃ¹ng Ä‘á»™ dÃ i, láº¡i vá»«a pháº£i cÃ¹ng hÆ°á»›ng chá»‰ vá» má»™t phÃ­a! Náº¿u hai vectÆ¡ cÃ¹ng Ä‘á»™ dÃ i nhÆ°ng ngÆ°á»£c hÆ°á»›ng nhau thÃ¬ chÃºng Ä‘á»‘i nhau chá»© khÃ´ng thá»ƒ báº±ng nhau.",
                    workedExample: {
                      title: "VÃ­ dá»¥ 3: Chá»©ng minh hai vectÆ¡ báº±ng nhau trong hÃ¬nh há»c",
                      problem: "Cho tá»© giÃ¡c $ABCD$. Chá»©ng minh ráº±ng tá»© giÃ¡c $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh khi vÃ  chá»‰ khi $\\vec{AB} = \\vec{DC}$.",
                      thinking: "Hai vectÆ¡ báº±ng nhau tÆ°Æ¡ng Ä‘Æ°Æ¡ng vá»›i cÃ¹ng hÆ°á»›ng (suy ra hai giÃ¡ song song) vÃ  cÃ¹ng Ä‘á»™ dÃ i (suy ra hai cáº¡nh báº±ng nhau).",
                      solution: `
                        <p><strong>Chiá»u thuáº­n ($\\implies$):</strong> Giáº£ sá»­ $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh.</p>
                        <p>Khi Ä‘Ã³ $AB // DC$ vÃ  $AB = DC$. Do $AB // DC$ vÃ  hai tia $AB, DC$ cÃ¹ng chá»‰ vá» má»™t phÃ­a nÃªn $\\vec{AB}$ cÃ¹ng hÆ°á»›ng vá»›i $\\vec{DC}$. Láº¡i cÃ³ $|\\vec{AB}| = AB = DC = |\\vec{DC}|$. Váº­y $\\vec{AB} = \\vec{DC}$.</p>
                        <p><strong>Chiá»u Ä‘áº£o ($\\impliedby$):</strong> Giáº£ sá»­ $\\vec{AB} = \\vec{DC}$.</p>
                        <p>Theo Ä‘á»‹nh nghÄ©a, $\\vec{AB}$ vÃ  $\\vec{DC}$ cÃ¹ng hÆ°á»›ng (suy ra $AB // DC$) vÃ  cÃ¹ng Ä‘á»™ dÃ i (suy ra $AB = DC$). Tá»© giÃ¡c $ABCD$ cÃ³ má»™t cáº·p cáº¡nh Ä‘á»‘i song song vÃ  báº±ng nhau nÃªn $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh.</p>
                      `,
                      teacherGuidance: "ÄÃ¢y lÃ  má»™t dáº¥u hiá»‡u nháº­n biáº¿t hÃ¬nh bÃ¬nh hÃ nh cá»±c ká»³ nhanh gá»n trong toÃ¡n vectÆ¡: Chá»‰ cáº§n viáº¿t vectÆ¡ AB báº±ng vectÆ¡ DC lÃ  Ä‘Ã£ kháº³ng Ä‘á»‹nh Ä‘Æ°á»£c tá»© giÃ¡c ABCD lÃ  hÃ¬nh bÃ¬nh hÃ nh!",
                      audioScript: "VÃ­ dá»¥ 3 cho chÃºng ta má»™t cÃ´ng cá»¥ chá»©ng minh hÃ¬nh há»c vÃ´ cÃ¹ng Ä‘áº¹p máº¯t: Tá»© giÃ¡c A B C D lÃ  hÃ¬nh bÃ¬nh hÃ nh khi vÃ  chá»‰ khi vectÆ¡ A B báº±ng vectÆ¡ D C cÃ¡c em nhÃ©!"
                    }
                  },
                  {
                    key: "b",
                    title: "VectÆ¡-khÃ´ng",
                    summary: "KhÃ¡i niá»‡m vectÆ¡-khÃ´ng cÃ³ Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i trÃ¹ng nhau, quy Æ°á»›c vá» phÆ°Æ¡ng vÃ  hÆ°á»›ng.",
                    illustration: "assets/images/lessons/hinh4_vecto_khong.svg",
                    illustrationCaption: "VectÆ¡-khÃ´ng cÃ³ Ä‘iá»ƒm Ä‘áº§u trÃ¹ng Ä‘iá»ƒm cuá»‘i AA = 0, Ä‘á»™ dÃ i báº±ng 0, cÃ¹ng phÆ°Æ¡ng vÃ  cÃ¹ng hÆ°á»›ng vá»›i má»i vectÆ¡.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-circle-dot"></i> VectÆ¡-khÃ´ng</div>
                          <p>VectÆ¡-khÃ´ng lÃ  vectÆ¡ cÃ³ Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i trÃ¹ng nhau, kÃ½ hiá»‡u lÃ  $\\vec{0}$.</p>
                          <p>VÃ­ dá»¥: $\\vec{AA} = \\vec{0}$, $\\vec{BB} = \\vec{0}$, $\\vec{MM} = \\vec{0}$.</p>
                          <p><strong>Quy Æ°á»›c Ä‘áº·c biá»‡t:</strong></p>
                          <ul>
                            <li>Äá»™ dÃ i cá»§a vectÆ¡-khÃ´ng báº±ng $0$, tá»©c lÃ  $|\\vec{0}| = 0$.</li>
                            <li>VectÆ¡-khÃ´ng cÃ³ phÆ°Æ¡ng vÃ  hÆ°á»›ng <strong>tÃ¹y Ã½</strong>.</li>
                            <li>Quy Æ°á»›c vectÆ¡ $\\vec{0}$ <strong>cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng vá»›i má»i vectÆ¡</strong>.</li>
                          </ul>
                        </div>
                      </div>
                    `,
                    teacherLecture: "VectÆ¡-khÃ´ng giá»‘ng nhÆ° sá»‘ 0 trong táº­p há»£p sá»‘ thá»±c váº­y cÃ¡c em. Äiá»ƒm xuáº¥t phÃ¡t vÃ  Ä‘iá»ƒm Ä‘Ã­ch trÃ¹ng lÃ m má»™t, Ä‘á»™ dÃ i báº±ng khÃ´ng. VÃ¬ khÃ´ng cÃ³ hÆ°á»›ng xÃ¡c Ä‘á»‹nh cá»¥ thá»ƒ nÃªn toÃ¡n há»c quy Æ°á»›c vectÆ¡-khÃ´ng cÃ¹ng phÆ°Æ¡ng vÃ  cÃ¹ng hÆ°á»›ng vá»›i táº¥t cáº£ má»i vectÆ¡ trÃªn Ä‘á»i!",
                    workedExample: {
                      title: "VÃ­ dá»¥ 4: TÃ­nh cháº¥t cá»§a vectÆ¡-khÃ´ng",
                      problem: "Cho tam giÃ¡c $ABC$. CÃ³ bao nhiÃªu vectÆ¡ cÃ³ Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i lÃ  cÃ¡c Ä‘á»‰nh cá»§a tam giÃ¡c mÃ  cÃ³ Ä‘á»™ dÃ i báº±ng $0$?",
                      thinking: "VectÆ¡ cÃ³ Ä‘á»™ dÃ i báº±ng 0 lÃ  vectÆ¡-khÃ´ng, cÃ³ Ä‘iá»ƒm Ä‘áº§u trÃ¹ng Ä‘iá»ƒm cuá»‘i.",
                      solution: `
                        <p><strong>Lá»i giáº£i chi tiáº¿t:</strong></p>
                        <p>Theo Ä‘á»‹nh nghÄ©a, vectÆ¡ cÃ³ Ä‘á»™ dÃ i báº±ng $0$ lÃ  vectÆ¡-khÃ´ng. Vá»›i 3 Ä‘á»‰nh $A, B, C$, cÃ¡c vectÆ¡-khÃ´ng cÃ³ Ä‘iá»ƒm Ä‘áº§u vÃ  Ä‘iá»ƒm cuá»‘i trÃ¹ng nhau lÃ : $\\vec{AA}, \\vec{BB}, \\vec{CC}$.</p>
                        <p>Váº­y cÃ³ Ä‘Ãºng 3 vectÆ¡ thá»a mÃ£n yÃªu cáº§u Ä‘á» bÃ i.</p>
                      `,
                      teacherGuidance: "CÃ¡c em nhá»› phÃ¢n biá»‡t: vectÆ¡ khÃ¡c vectÆ¡-khÃ´ng ná»‘i 2 Ä‘á»‰nh phÃ¢n biá»‡t thÃ¬ cÃ³ 6 vectÆ¡ (AB, BA, AC, CA, BC, CB), cÃ²n vectÆ¡ cÃ³ Ä‘á»™ dÃ i báº±ng 0 thÃ¬ cÃ³ 3 vectÆ¡ (AA, BB, CC).",
                      audioScript: "Vá»›i ba Ä‘á»‰nh A, B, C cá»§a tam giÃ¡c, cÃ¡c vectÆ¡ cÃ³ Ä‘á»™ dÃ i báº±ng 0 chÃ­nh lÃ  cÃ¡c vectÆ¡-khÃ´ng: vectÆ¡ A A, vectÆ¡ B B vÃ  vectÆ¡ C C cÃ¡c em nhÃ©!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "Váº¬N Dá»¤NG THá»°C Táº¾: QUAY Láº I GIáº¢I QUYáº¾T BÃ€I TOÃN TÃŒNH HUá»NG Má»ž Äáº¦U",
              recap: "Táº¡i sao hai tÃ u lai dáº¯t kÃ©o á»Ÿ hai gÃ³c khÃ¡c nhau láº¡i cÃ³ thá»ƒ giÃºp con tÃ u chá»Ÿ hÃ ng 10.000 táº¥n Ä‘i tháº³ng táº¯p vÃ o luá»“ng cáº£ng Háº£i PhÃ²ng?",
              illustration: "assets/images/lessons/wrapup_giai_quyet_tau_keo.svg",
              illustrationCaption: "MÃ´ hÃ¬nh toÃ¡n há»c quy táº¯c hÃ¬nh bÃ¬nh hÃ nh lá»±c giáº£i quyáº¿t bÃ i toÃ¡n tÃ u lai dáº¯t.",
              solution: `
                <p><strong>Lá»i giáº£i chi tiáº¿t & MÃ´ hÃ¬nh hÃ³a ToÃ¡n há»c cá»§a Tháº§y SÃ¡ng:</strong></p>
                <p>1. <strong>MÃ´ hÃ¬nh hÃ³a hÃ¬nh há»c:</strong> Äiá»ƒm buá»™c dÃ¢y cÃ¡p táº¡i mÅ©i tÃ u hÃ ng lÃ  Ä‘iá»ƒm $M$. Gá»i $\\vec{F}_1$ lÃ  vectÆ¡ lá»±c kÃ©o cá»§a tÃ u A vÃ  $\\vec{F}_2$ lÃ  vectÆ¡ lá»±c kÃ©o cá»§a tÃ u B.</p>
                <p>2. <strong>Äiá»u kiá»‡n Ä‘á»ƒ tÃ u Ä‘i tháº³ng:</strong> Äá»ƒ con tÃ u hÃ ng di chuyá»ƒn tháº³ng táº¯p theo trá»¥c luá»“ng cáº£ng, há»£p lá»±c kÃ©o $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ pháº£i cÃ³ giÃ¡ náº±m chÃ­nh xÃ¡c trÃªn trá»¥c luá»“ng cáº£ng. Äiá»u nÃ y Ä‘Ã²i há»i:
                <ul>
                  <li>Hai lá»±c kÃ©o pháº£i cÃ³ Ä‘á»™ lá»›n báº±ng nhau: $|\\vec{F}_1| = |\\vec{F}_2| = F_0 = 5.000\\text{ N}$.</li>
                  <li>GÃ³c táº¡o bá»Ÿi má»—i dÃ¢y cÃ¡p vá»›i trá»¥c luá»“ng cáº£ng pháº£i Ä‘á»‘i xá»©ng nhau: $\\alpha_1 = \\alpha_2 = 30^\\circ$.</li>
                </ul>
                </p>
                <p>3. <strong>TÃ­nh Ä‘á»™ lá»›n há»£p lá»±c:</strong> Theo quy táº¯c hÃ¬nh bÃ¬nh hÃ nh lá»±c, Ä‘á»™ lá»›n há»£p lá»±c $\\vec{F}$ kÃ©o tÃ u lÃ :
                $F = 2 \\cdot F_0 \\cdot \\cos 30^\\circ = 2 \\cdot 5.000 \\cdot \\frac{\\sqrt{3}}{2} = 5.000\\sqrt{3} \\approx 8.660\\text{ N}$
                </p>
                <p><strong>Ã nghÄ©a thá»±c táº¿:</strong> ToÃ¡n há»c vectÆ¡ Ä‘Ã£ giÃºp cÃ¡c thuyá»n trÆ°á»Ÿng Ä‘iá»u phá»‘i lá»±c kÃ©o chÃ­nh xÃ¡c tá»«ng gÃ³c Ä‘á»™, giÃºp con tÃ u hÃ ng khá»•ng lá»“ cáº­p cáº£ng an toÃ n tuyá»‡t Ä‘á»‘i mÃ  khÃ´ng bá»‹ trÃ´i dáº¡t vÃ o bá» cáº¡n!</p>
              `,
              audioScript: "CÃ¡c em tháº¥y Ä‘áº¥y, toÃ¡n há»c vectÆ¡ khÃ´ng há» khÃ´ khan mÃ  gáº¯n liá»n vá»›i hÆ¡i thá»Ÿ cuá»™c sá»‘ng. Khi hai tÃ u lai dáº¯t kÃ©o Ä‘á»‘i xá»©ng nhau vá»›i gÃ³c ba mÆ°Æ¡i Ä‘á»™ vÃ  lá»±c kÃ©o nÄƒm nghÃ¬n Niu-tÆ¡n, theo quy táº¯c hÃ¬nh bÃ¬nh hÃ nh lá»±c, há»£p lá»±c táº¡o thÃ nh sáº½ cÃ³ phÆ°Æ¡ng Ä‘i tháº³ng táº¯p vÃ o tim luá»“ng cáº£ng vá»›i Ä‘á»™ lá»›n xáº¥p xá»‰ tÃ¡m nghÃ¬n sÃ¡u trÄƒm sÃ¡u mÆ°Æ¡i Niu-tÆ¡n. Nhá» Ä‘Ã³, con tÃ u hÃ ng khá»•ng lá»“ Ä‘Æ°á»£c dáº«n dáº¯t an toÃ n tuyá»‡t Ä‘á»‘i!",
              audioUrl: "assets/audio/b7_wrapup.mp3"
            },
            interactiveChallenges: [
              {
                type: "quiz",
                title: "Thá»­ thÃ¡ch 1: Tráº¯c nghiá»‡m nháº­n biáº¿t vectÆ¡ báº±ng nhau",
                question: "Cho hÃ¬nh bÃ¬nh hÃ nh $ABCD$ tÃ¢m $O$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  kháº³ng Ä‘á»‹nh ÄÃšNG?",
                options: [
                  "A. $\\vec{AB} = \\vec{CD}$",
                  "B. $\\vec{AB} = \\vec{DC}$",
                  "C. $\\vec{OA} = \\vec{OC}$",
                  "D. $\\vec{AO} = \\vec{CO}$"
                ],
                correctIndex: 1,
                explanation: "VÃ¬ ABCD lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn cáº¡nh AB song song vÃ  báº±ng cáº¡nh DC. HÆ¡n ná»¯a hÆ°á»›ng tá»« A Ä‘áº¿n B cÃ¹ng hÆ°á»›ng vá»›i hÆ°á»›ng tá»« D Ä‘áº¿n C (tá»« trÃ¡i sang pháº£i). Do Ä‘Ã³ vectÆ¡ AB = vectÆ¡ DC. Kháº³ng Ä‘á»‹nh B Ä‘Ãºng!"
              },
              {
                type: "matching",
                title: "Thá»­ thÃ¡ch 2: GhÃ©p cáº·p ná»‘i cá»™t khÃ¡i niá»‡m ToÃ¡n há»c",
                instruction: "HÃ£y ghÃ©p má»—i thuáº­t ngá»¯ á»Ÿ Cá»™t A vá»›i Ä‘á»‹nh nghÄ©a chuáº©n xÃ¡c nháº¥t á»Ÿ Cá»™t B:",
                pairs: [
                  { left: "Hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng", right: "GiÃ¡ cá»§a chÃºng song song hoáº·c trÃ¹ng nhau" },
                  { left: "Hai vectÆ¡ báº±ng nhau", right: "CÃ¹ng hÆ°á»›ng vÃ  cÃ¹ng Ä‘á»™ dÃ i" },
                  { left: "VectÆ¡-khÃ´ng", right: "Äiá»ƒm Ä‘áº§u trÃ¹ng Ä‘iá»ƒm cuá»‘i, Ä‘á»™ dÃ i báº±ng 0" },
                  { left: "Äá»™ dÃ i vectÆ¡ AB", right: "Khoáº£ng cÃ¡ch hÃ¬nh há»c giá»¯a hai Ä‘iá»ƒm A vÃ  B" }
                ]
              },
              {
                type: "true_false",
                title: "Thá»­ thÃ¡ch 3: Kháº£o sÃ¡t ÄÃºng / Sai (Chuáº©n cáº¥u trÃºc Ä‘á» thi tá»‘t nghiá»‡p 2025)",
                instruction: "Cho Ä‘oáº¡n tháº³ng $BC$ cÃ³ $M$ lÃ  trung Ä‘iá»ƒm. XÃ©t tÃ­nh ÄÃºng hoáº·c Sai cá»§a cÃ¡c má»‡nh Ä‘á» sau:",
                statements: [
                  { text: "a) Hai vectÆ¡ $\\vec{MB}$ vÃ  $\\vec{MC}$ cÃ¹ng phÆ°Æ¡ng vá»›i nhau.", isTrue: true, explain: "ÄÃºng vÃ¬ giÃ¡ cá»§a hai vectÆ¡ Ä‘á»u lÃ  Ä‘Æ°á»ng tháº³ng chá»©a Ä‘oáº¡n tháº³ng BC nÃªn chÃºng trÃ¹ng nhau." },
                  { text: "b) Äá»™ dÃ i $|\\vec{MB}| = |\\vec{MC}|$.", isTrue: true, explain: "ÄÃºng vÃ¬ M lÃ  trung Ä‘iá»ƒm cá»§a BC nÃªn khoáº£ng cÃ¡ch MB = MC." },
                  { text: "c) Hai vectÆ¡ $\\vec{MB}$ vÃ  $\\vec{MC}$ lÃ  hai vectÆ¡ báº±ng nhau.", isTrue: false, explain: "Sai vÃ¬ M lÃ  trung Ä‘iá»ƒm cá»§a BC nÃªn hai vectÆ¡ nÃ y cÃ³ cÃ¹ng Ä‘á»™ dÃ i nhÆ°ng ngÆ°á»£c hÆ°á»›ng nhau (chÃºng lÃ  hai vectÆ¡ Ä‘á»‘i nhau)." },
                  { text: "d) VectÆ¡ $\\vec{AA}$ cÃ³ Ä‘á»™ dÃ i báº±ng 1.", isTrue: false, explain: "Sai vÃ¬ vectÆ¡ AA lÃ  vectÆ¡-khÃ´ng, cÃ³ Ä‘á»™ dÃ i báº±ng 0." }
                ]
              }
            ]
          },
          // BÃ i 8: Tá»•ng vÃ  hiá»‡u cá»§a hai vectÆ¡ (TÆ°Æ¡ng thÃ­ch 2 chiá»u vá»›i lesson-10-8-data.js)
          (function() {
            if (typeof window !== "undefined" && window.LESSON_10_C4_B8_DATA) {
              return window.LESSON_10_C4_B8_DATA;
            }
            return {
              id: "10-c4-b8",
              number: "BÃ i 8",
              title: "Tá»•ng vÃ  hiá»‡u cá»§a hai vectÆ¡",
              sections: [
                {
                  id: "10-c4-b8-s1",
                  title: "1. Tá»•ng cá»§a hai vectÆ¡",
                  subsections: [
                    { id: "10-c4-b8-s1-a", title: "a) Äá»‹nh nghÄ©a tá»•ng cá»§a hai vectÆ¡", summary: "Cho hai vectÆ¡ a vÃ  b. Láº¥y Ä‘iá»ƒm A, váº½ AB = a, BC = b. VectÆ¡ AC gá»i lÃ  tá»•ng cá»§a hai vectÆ¡ a vÃ  b." },
                    { id: "10-c4-b8-s1-b", title: "b) Quy táº¯c ba Ä‘iá»ƒm", summary: "Vá»›i ba Ä‘iá»ƒm A, B, C báº¥t kÃ¬, ta luÃ´n cÃ³ AB + BC = AC." },
                    { id: "10-c4-b8-s1-c", title: "c) Quy táº¯c hÃ¬nh bÃ¬nh hÃ nh", summary: "Náº¿u ABCD lÃ  hÃ¬nh bÃ¬nh hÃ nh thÃ¬ AB + AD = AC." }
                  ]
                },
                {
                  id: "10-c4-b8-s2",
                  title: "2. Hiá»‡u cá»§a hai vectÆ¡",
                  subsections: [
                    { id: "10-c4-b8-s2-a", title: "a) Hai vectÆ¡ Ä‘á»‘i nhau", summary: "Hai vectÆ¡ Ä‘á»‘i nhau lÃ  hai vectÆ¡ ngÆ°á»£c hÆ°á»›ng vÃ  cÃ¹ng Ä‘á»™ dÃ i. KÃ­ hiá»‡u vectÆ¡ Ä‘á»‘i cá»§a a lÃ  -a. a + (-a) = 0." },
                    { id: "10-c4-b8-s2-b", title: "b) Äá»‹nh nghÄ©a hiá»‡u cá»§a hai vectÆ¡", summary: "Hiá»‡u cá»§a hai vectÆ¡ a vÃ  b lÃ  tá»•ng cá»§a a vÃ  vectÆ¡ Ä‘á»‘i cá»§a b: a - b = a + (-b)." },
                    { id: "10-c4-b8-s2-c", title: "c) Quy táº¯c hiá»‡u (quy táº¯c ba Ä‘iá»ƒm cho phÃ©p trá»«)", summary: "Vá»›i ba Ä‘iá»ƒm O, A, B báº¥t kÃ¬: OA - OB = BA (hoáº·c OB - OA = AB)." }
                  ]
                }
              ]
            };
          })(),
          {
            id: "10-c4-b9",
            number: "BÃ i 9",
            title: "TÃ­ch cá»§a má»™t vectÆ¡ vá»›i má»™t sá»‘",
            sections: [
              {
                id: "10-c4-b9-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a tÃ­ch vectÆ¡ vá»›i má»™t sá»‘",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m vÃ  kÃ­ hiá»‡u k.a", summary: "Äá»™ dÃ i |k.a| = |k|.|a| vÃ  hÆ°á»›ng tuá»³ thuá»™c vÃ o dáº¥u cá»§a k." },
                  { key: "b", title: "CÃ¡c tÃ­nh cháº¥t cá»§a phÃ©p nhÃ¢n vectÆ¡ vá»›i sá»‘", summary: "TÃ­nh phÃ¢n phá»‘i Ä‘á»‘i vá»›i phÃ©p cá»™ng vectÆ¡ vÃ  sá»‘ thá»±c." }
                ]
              },
              {
                id: "10-c4-b9-s2",
                num: "2",
                title: "Äiá»u kiá»‡n Ä‘á»ƒ hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng",
                subsections: [
                  { key: "a", title: "Biá»ƒu thá»‹ vectÆ¡ qua hai vectÆ¡ khÃ´ng cÃ¹ng phÆ°Æ¡ng", summary: "Äá»‹nh lÃ­ phÃ¢n tÃ­ch má»™t vectÆ¡ báº¥t kÃ¬ theo hai vectÆ¡ khÃ´ng cÃ¹ng phÆ°Æ¡ng." },
                  { key: "b", title: "Äiá»u kiá»‡n ba Ä‘iá»ƒm tháº³ng hÃ ng", summary: "Ba Ä‘iá»ƒm A, B, C tháº³ng hÃ ng khi vÃ  chá»‰ khi AB = k.AC." }
                ]
              }
            ]
          },
          {
            id: "10-c4-b10",
            number: "BÃ i 10",
            title: "VectÆ¡ trong máº·t pháº³ng toáº¡ Ä‘á»™",
            sections: [
              {
                id: "10-c4-b10-s1",
                num: "1",
                title: "Toáº¡ Ä‘á»™ cá»§a vectÆ¡",
                subsections: [
                  { key: "a", title: "Há»‡ trá»¥c toáº¡ Ä‘á»™ Oxy", summary: "Trá»¥c Ox, trá»¥c Oy vÃ  cÃ¡c vectÆ¡ Ä‘Æ¡n vá»‹ i, j." },
                  { key: "b", title: "Toáº¡ Ä‘á»™ cá»§a vectÆ¡ vÃ  toáº¡ Ä‘á»™ Ä‘iá»ƒm", summary: "u = x.i + y.j <=> u = (x; y); toáº¡ Ä‘á»™ Ä‘iá»ƒm M lÃ  toáº¡ Ä‘á»™ cá»§a OM." }
                ]
              },
              {
                id: "10-c4-b10-s2",
                num: "2",
                title: "Biá»ƒu thá»©c toáº¡ Ä‘á»™ cá»§a cÃ¡c phÃ©p toÃ¡n vectÆ¡",
                subsections: [
                  { key: "a", title: "Toáº¡ Ä‘á»™ tá»•ng, hiá»‡u vÃ  tÃ­ch vá»›i má»™t sá»‘", summary: "u Â± v = (x Â± x'; y Â± y'); k.u = (kx; ky)." },
                  { key: "b", title: "Toáº¡ Ä‘á»™ trung Ä‘iá»ƒm vÃ  trá»ng tÃ¢m tam giÃ¡c", summary: "CÃ´ng thá»©c trung Ä‘iá»ƒm M((xA+xB)/2; (yA+yB)/2) vÃ  trá»ng tÃ¢m G." }
                ]
              }
            ]
          },
          {
            id: "10-c4-b11",
            number: "BÃ i 11",
            title: "TÃ­ch vÃ´ hÆ°á»›ng cá»§a hai vectÆ¡",
            sections: [
              {
                id: "10-c4-b11-s1",
                num: "1",
                title: "GÃ³c giá»¯a hai vectÆ¡",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a gÃ³c giá»¯a hai vectÆ¡", summary: "GÃ³c (a, b) tá»« 0Â° Ä‘áº¿n 180Â° xÃ¡c Ä‘á»‹nh tá»« má»™t Ä‘iá»ƒm O chung gá»‘c." },
                  { key: "b", title: "Hai vectÆ¡ vuÃ´ng gÃ³c", summary: "Khi gÃ³c giá»¯a hai vectÆ¡ báº±ng 90Â°, kÃ­ hiá»‡u a âŠ¥ b." }
                ]
              },
              {
                id: "10-c4-b11-s2",
                num: "2",
                title: "TÃ­ch vÃ´ hÆ°á»›ng cá»§a hai vectÆ¡",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a tÃ­ch vÃ´ hÆ°á»›ng", summary: "a . b = |a| . |b| . cos(a, b)." },
                  { key: "b", title: "Biá»ƒu thá»©c toáº¡ Ä‘á»™ cá»§a tÃ­ch vÃ´ hÆ°á»›ng", summary: "u . v = x.x' + y.y'; cÃ´ng thá»©c Ä‘á»™ dÃ i vÃ  khoáº£ng cÃ¡ch giá»¯a hai Ä‘iá»ƒm." },
                  { key: "c", title: "CÃ´ng thá»©c cÃ´sin cá»§a gÃ³c giá»¯a hai vectÆ¡", summary: "cos(u, v) = (x.x' + y.y') / (âˆš(xÂ²+yÂ²) . âˆš(x'Â²+y'Â²))." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-5",
        number: "ChÆ°Æ¡ng V",
        title: "CÃ¡c sá»‘ Ä‘áº·c trÆ°ng cá»§a máº«u sá»‘ liá»‡u khÃ´ng ghÃ©p nhÃ³m",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "10-c5-b12",
            number: "BÃ i 12",
            title: "Sá»‘ gáº§n Ä‘Ãºng vÃ  sai sá»‘",
            sections: [
              {
                id: "10-c5-b12-s1",
                num: "1",
                title: "Sá»‘ gáº§n Ä‘Ãºng vÃ  sai sá»‘ tuyá»‡t Ä‘á»‘i",
                subsections: [
                  { key: "a", title: "Sá»‘ gáº§n Ä‘Ãºng", summary: "KhÃ¡i niá»‡m sá»‘ Ä‘Ãºng a vÃ  sá»‘ gáº§n Ä‘Ãºng a_." },
                  { key: "b", title: "Sai sá»‘ tuyá»‡t Ä‘á»‘i vÃ  Ä‘á»™ chÃ­nh xÃ¡c", summary: "Î”a = |a - a_| <= d; cÃ¡ch viáº¿t a = a_ Â± d." }
                ]
              },
              {
                id: "10-c5-b12-s2",
                num: "2",
                title: "Sai sá»‘ tÆ°Æ¡ng Ä‘á»‘i vÃ  sá»‘ quy trÃ²n",
                subsections: [
                  { key: "a", title: "Sai sá»‘ tÆ°Æ¡ng Ä‘á»‘i", summary: "Î´a = Î”a / |a_| dÃ¹ng Ä‘Ã¡nh giÃ¡ Ä‘á»™ chÃ­nh xÃ¡c cá»§a phÃ©p Ä‘o." },
                  { key: "b", title: "Quy trÃ²n sá»‘ gáº§n Ä‘Ãºng", summary: "Quy táº¯c lÃ m trÃ²n sá»‘ vÃ  xÃ¡c Ä‘á»‹nh chá»¯ sá»‘ cÃ³ nghÄ©a Ä‘Ã¡ng tin cáº­y." }
                ]
              }
            ]
          },
          {
            id: "10-c5-b13",
            number: "BÃ i 13",
            title: "CÃ¡c sá»‘ Ä‘áº·c trÆ°ng Ä‘o xu tháº¿ trung tÃ¢m",
            sections: [
              {
                id: "10-c5-b13-s1",
                num: "1",
                title: "Sá»‘ trung bÃ¬nh",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh sá»‘ trung bÃ¬nh", summary: "xÌ„ = (x1 + x2 + ... + xn) / n." },
                  { key: "b", title: "Ã nghÄ©a cá»§a sá»‘ trung bÃ¬nh", summary: "Äáº¡i diá»‡n cho má»©c Ä‘á»™ trung bÃ¬nh cá»§a toÃ n bá»™ máº«u sá»‘ liá»‡u." }
                ]
              },
              {
                id: "10-c5-b13-s2",
                num: "2",
                title: "Trung vá»‹ vÃ  tá»© phÃ¢n vá»‹",
                subsections: [
                  { key: "a", title: "Trung vá»‹ Me", summary: "GiÃ¡ trá»‹ náº±m chÃ­nh giá»¯a dÃ£y sá»‘ liá»‡u Ä‘Ã£ sáº¯p xáº¿p thá»© tá»±." },
                  { key: "b", title: "CÃ¡c tá»© phÃ¢n vá»‹ Q1, Q2, Q3", summary: "Chia dÃ£y sá»‘ liá»‡u thÃ nh 4 pháº§n cÃ³ sá»‘ lÆ°á»£ng pháº§n tá»­ xáº¥p xá»‰ báº±ng nhau." }
                ]
              },
              {
                id: "10-c5-b13-s3",
                num: "3",
                title: "Má»‘t cá»§a máº«u sá»‘ liá»‡u",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a má»‘t Mo", summary: "GiÃ¡ trá»‹ cÃ³ táº§n sá»‘ xuáº¥t hiá»‡n lá»›n nháº¥t trong máº«u sá»‘ liá»‡u." },
                  { key: "b", title: "Ã nghÄ©a thá»±c tiá»…n cá»§a má»‘t", summary: "Ãp dá»¥ng trong nghiÃªn cá»©u thá»‹ trÆ°á»ng, kinh doanh hÃ ng tiÃªu dÃ¹ng." }
                ]
              }
            ]
          },
          {
            id: "10-c5-b14",
            number: "BÃ i 14",
            title: "CÃ¡c sá»‘ Ä‘áº·c trÆ°ng Ä‘o Ä‘á»™ phÃ¢n tÃ¡n",
            sections: [
              {
                id: "10-c5-b14-s1",
                num: "1",
                title: "Khoáº£ng biáº¿n thiÃªn vÃ  khoáº£ng tá»© phÃ¢n vá»‹",
                subsections: [
                  { key: "a", title: "Khoáº£ng biáº¿n thiÃªn R", summary: "R = x_max - x_min pháº£n Ã¡nh Ä‘á»™ biáº¿n thiÃªn tá»•ng thá»ƒ." },
                  { key: "b", title: "Khoáº£ng tá»© phÃ¢n vá»‹ Î”Q", summary: "Î”Q = Q3 - Q1 vÃ  tiÃªu chÃ­ phÃ¡t hiá»‡n giÃ¡ trá»‹ ngoáº¡i lá»‡." }
                ]
              },
              {
                id: "10-c5-b14-s2",
                num: "2",
                title: "PhÆ°Æ¡ng sai vÃ  Ä‘á»™ lá»‡ch chuáº©n",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh phÆ°Æ¡ng sai sÂ²", summary: "sÂ² = 1/n âˆ‘ (xi - xÌ„)Â²." },
                  { key: "b", title: "Äá»™ lá»‡ch chuáº©n s", summary: "s = âˆš(sÂ²) Ä‘o má»©c Ä‘á»™ phÃ¢n tÃ¡n quanh sá»‘ trung bÃ¬nh." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-6",
        number: "ChÆ°Æ¡ng VI",
        title: "HÃ m sá»‘, Ä‘á»“ thá»‹ vÃ  á»©ng dá»¥ng",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "10-c6-b15",
            number: "BÃ i 15",
            title: "HÃ m sá»‘",
            sections: [
              {
                id: "10-c6-b15-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m hÃ m sá»‘",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a hÃ m sá»‘ vÃ  táº­p xÃ¡c Ä‘á»‹nh", summary: "Quy táº¯c Ä‘áº·t tÆ°Æ¡ng á»©ng má»—i x thuá»™c D vá»›i duy nháº¥t má»™t y thuá»™c R." },
                  { key: "b", title: "Äá»“ thá»‹ cá»§a hÃ m sá»‘", summary: "Táº­p há»£p cÃ¡c Ä‘iá»ƒm M(x; f(x)) trÃªn máº·t pháº³ng toáº¡ Ä‘á»™ Oxy." }
                ]
              },
              {
                id: "10-c6-b15-s2",
                num: "2",
                title: "Sá»± Ä‘á»“ng biáº¿n, nghá»‹ch biáº¿n cá»§a hÃ m sá»‘",
                subsections: [
                  { key: "a", title: "HÃ m sá»‘ Ä‘á»“ng biáº¿n (tÄƒng)", summary: "Vá»›i x1 < x2 => f(x1) < f(x2) trÃªn khoáº£ng K." },
                  { key: "b", title: "HÃ m sá»‘ nghá»‹ch biáº¿n (giáº£m)", summary: "Vá»›i x1 < x2 => f(x1) > f(x2) trÃªn khoáº£ng K." }
                ]
              }
            ]
          },
          {
            id: "10-c6-b16",
            number: "BÃ i 16",
            title: "HÃ m sá»‘ báº­c hai",
            sections: [
              {
                id: "10-c6-b16-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a vÃ  Ä‘á»“ thá»‹ parabol",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a hÃ m sá»‘ báº­c hai y = axÂ² + bx + c", summary: "HÃ m sá»‘ báº­c hai vá»›i há»‡ sá»‘ a khÃ¡c 0." },
                  { key: "b", title: "Äá»‰nh vÃ  trá»¥c Ä‘á»‘i xá»©ng cá»§a parabol", summary: "Äá»‰nh I(-b/(2a); -Î”/(4a)), trá»¥c Ä‘á»‘i xá»©ng x = -b/(2a), bá» lÃµm quay lÃªn khi a > 0, quay xuá»‘ng khi a < 0." }
                ]
              },
              {
                id: "10-c6-b16-s2",
                num: "2",
                title: "Sá»± biáº¿n thiÃªn cá»§a hÃ m sá»‘ báº­c hai",
                subsections: [
                  { key: "a", title: "Báº£ng biáº¿n thiÃªn hÃ m sá»‘ báº­c hai", summary: "Khoáº£ng Ä‘á»“ng biáº¿n, nghá»‹ch biáº¿n vÃ  giÃ¡ trá»‹ cá»±c trá»‹ cá»§a parabol." },
                  { key: "b", title: "á»¨ng dá»¥ng thá»±c táº¿ cá»§a hÃ m sá»‘ báº­c hai", summary: "BÃ i toÃ¡n quá»¹ Ä‘áº¡o bÃ³ng bay, thiáº¿t káº¿ cáº§u treo, tá»‘i Æ°u diá»‡n tÃ­ch." }
                ]
              }
            ]
          },
          {
            id: "10-c6-b17",
            number: "BÃ i 17",
            title: "Dáº¥u cá»§a tam thá»©c báº­c hai",
            sections: [
              {
                id: "10-c6-b17-s1",
                num: "1",
                title: "Tam thá»©c báº­c hai vÃ  Ä‘á»‹nh lÃ­ vá» dáº¥u",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m tam thá»©c báº­c hai", summary: "Biá»ƒu thá»©c f(x) = axÂ² + bx + c (a â‰  0)." },
                  { key: "b", title: "Äá»‹nh lÃ­ vá» dáº¥u cá»§a tam thá»©c báº­c hai", summary: "Quy táº¯c cÃ¹ng dáº¥u vá»›i há»‡ sá»‘ a khi Î” < 0; cÃ¹ng dáº¥u trá»« x = -b/(2a) khi Î” = 0; 'trong trÃ¡i ngoÃ i cÃ¹ng' khi Î” > 0." }
                ]
              },
              {
                id: "10-c6-b17-s2",
                num: "2",
                title: "Báº¥t phÆ°Æ¡ng trÃ¬nh báº­c hai má»™t áº©n",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m báº¥t phÆ°Æ¡ng trÃ¬nh báº­c hai", summary: "Dáº¡ng axÂ² + bx + c > 0 (hoáº·c >=, <, <= 0)." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p giáº£i báº¥t phÆ°Æ¡ng trÃ¬nh báº­c hai", summary: "XÃ©t dáº¥u tam thá»©c báº­c hai vÃ  káº¿t luáº­n táº­p nghiá»‡m." }
                ]
              }
            ]
          },
          {
            id: "10-c6-b18",
            number: "BÃ i 18",
            title: "PhÆ°Æ¡ng trÃ¬nh quy vá» phÆ°Æ¡ng trÃ¬nh báº­c hai",
            sections: [
              {
                id: "10-c6-b18-s1",
                num: "1",
                title: "PhÆ°Æ¡ng trÃ¬nh dáº¡ng âˆš(axÂ² + bx + c) = âˆš(dxÂ² + ex + f)",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng phÃ¡p giáº£i bÃ¬nh phÆ°Æ¡ng hai váº¿", summary: "BÃ¬nh phÆ°Æ¡ng hai váº¿ Ä‘á»ƒ Ä‘Æ°a vá» phÆ°Æ¡ng trÃ¬nh báº­c nháº¥t hoáº·c báº­c hai." },
                  { key: "b", title: "Thá»­ láº¡i vÃ  káº¿t luáº­n nghiá»‡m", summary: "Thá»­ láº¡i cÃ¡c nghiá»‡m tÃ¬m Ä‘Æ°á»£c vÃ o phÆ°Æ¡ng trÃ¬nh ban Ä‘áº§u Ä‘á»ƒ loáº¡i nghiá»‡m ngoáº¡i lai." }
                ]
              },
              {
                id: "10-c6-b18-s2",
                num: "2",
                title: "PhÆ°Æ¡ng trÃ¬nh dáº¡ng âˆš(axÂ² + bx + c) = dx + e",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng phÃ¡p giáº£i vÃ  Ä‘áº·t Ä‘iá»u kiá»‡n", summary: "BÃ¬nh phÆ°Æ¡ng hai váº¿ Ä‘Æ°a vá» phÆ°Æ¡ng trÃ¬nh Ä‘áº¡i sá»‘." },
                  { key: "b", title: "Luyá»‡n táº­p giáº£i phÆ°Æ¡ng trÃ¬nh chá»©a cÄƒn", summary: "CÃ¡c dáº¡ng bÃ i táº­p rÃ¨n ká»¹ nÄƒng vÃ  thá»­ láº¡i nghiá»‡m." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-7",
        number: "ChÆ°Æ¡ng VII",
        title: "PhÆ°Æ¡ng phÃ¡p toáº¡ Ä‘á»™ trong máº·t pháº³ng",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "10-c7-b19",
            number: "BÃ i 19",
            title: "PhÆ°Æ¡ng trÃ¬nh Ä‘Æ°á»ng tháº³ng",
            sections: [
              {
                id: "10-c7-b19-s1",
                num: "1",
                title: "VectÆ¡ chá»‰ phÆ°Æ¡ng vÃ  vectÆ¡ phÃ¡p tuyáº¿n",
                subsections: [
                  { key: "a", title: "VectÆ¡ chá»‰ phÆ°Æ¡ng (VTCP)", summary: "VectÆ¡ khÃ¡c 0 cÃ³ giÃ¡ song song hoáº·c trÃ¹ng vá»›i Ä‘Æ°á»ng tháº³ng." },
                  { key: "b", title: "VectÆ¡ phÃ¡p tuyáº¿n (VTPT)", summary: "VectÆ¡ khÃ¡c 0 cÃ³ giÃ¡ vuÃ´ng gÃ³c vá»›i Ä‘Æ°á»ng tháº³ng; liÃªn há»‡ u(-b; a) <=> n(a; b)." }
                ]
              },
              {
                id: "10-c7-b19-s2",
                num: "2",
                title: "CÃ¡c dáº¡ng phÆ°Æ¡ng trÃ¬nh Ä‘Æ°á»ng tháº³ng",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh tham sá»‘ cá»§a Ä‘Æ°á»ng tháº³ng", summary: "Há»‡ x = x0 + at; y = y0 + bt vá»›i t thuá»™c R." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh tá»•ng quÃ¡t cá»§a Ä‘Æ°á»ng tháº³ng", summary: "ax + by + c = 0 vá»›i aÂ² + bÂ² > 0." }
                ]
              }
            ]
          },
          {
            id: "10-c7-b20",
            number: "BÃ i 20",
            title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a hai Ä‘Æ°á»ng tháº³ng. GÃ³c vÃ  khoáº£ng cÃ¡ch",
            sections: [
              {
                id: "10-c7-b20-s1",
                num: "1",
                title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a hai Ä‘Æ°á»ng tháº³ng",
                subsections: [
                  { key: "a", title: "XÃ©t há»‡ phÆ°Æ¡ng trÃ¬nh toáº¡ Ä‘á»™ giao Ä‘iá»ƒm", summary: "Há»‡ cÃ³ nghiá»‡m duy nháº¥t (cáº¯t nhau), vÃ´ nghiá»‡m (song song), vÃ´ sá»‘ nghiá»‡m (trÃ¹ng nhau)." },
                  { key: "b", title: "Äiá»u kiá»‡n tá»‰ sá»‘ há»‡ sá»‘", summary: "So sÃ¡nh tá»‰ sá»‘ a1/a2, b1/b2, c1/c2 khi cÃ¡c há»‡ sá»‘ khÃ¡c 0." }
                ]
              },
              {
                id: "10-c7-b20-s2",
                num: "2",
                title: "GÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh gÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng", summary: "cos Ï† = |a1.a2 + b1.b2| / (âˆš(a1Â²+b1Â²) . âˆš(a2Â²+b2Â²))." },
                  { key: "b", title: "Äiá»u kiá»‡n hai Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c", summary: "a1.a2 + b1.b2 = 0." }
                ]
              },
              {
                id: "10-c7-b20-s3",
                num: "3",
                title: "Khoáº£ng cÃ¡ch tá»« má»™t Ä‘iá»ƒm Ä‘áº¿n má»™t Ä‘Æ°á»ng tháº³ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh khoáº£ng cÃ¡ch", summary: "d(M0, Î”) = |ax0 + by0 + c| / âˆš(aÂ² + bÂ²)." },
                  { key: "b", title: "á»¨ng dá»¥ng tÃ­nh diá»‡n tÃ­ch vÃ  khoáº£ng cÃ¡ch song song", summary: "TÃ­nh chiá»u cao tam giÃ¡c, khoáº£ng cÃ¡ch giá»¯a hai Ä‘Æ°á»ng tháº³ng song song." }
                ]
              }
            ]
          },
          {
            id: "10-c7-b21",
            number: "BÃ i 21",
            title: "ÄÆ°á»ng trÃ²n trong máº·t pháº³ng toáº¡ Ä‘á»™",
            sections: [
              {
                id: "10-c7-b21-s1",
                num: "1",
                title: "PhÆ°Æ¡ng trÃ¬nh Ä‘Æ°á»ng trÃ²n",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh chÃ­nh táº¯c", summary: "(x - a)Â² + (y - b)Â² = RÂ² vá»›i tÃ¢m I(a; b) bÃ¡n kÃ­nh R." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh khai triá»ƒn", summary: "xÂ² + yÂ² - 2ax - 2by + c = 0 vá»›i Ä‘iá»u kiá»‡n aÂ² + bÂ² - c > 0." }
                ]
              },
              {
                id: "10-c7-b21-s2",
                num: "2",
                title: "PhÆ°Æ¡ng trÃ¬nh tiáº¿p tuyáº¿n cá»§a Ä‘Æ°á»ng trÃ²n",
                subsections: [
                  { key: "a", title: "Tiáº¿p tuyáº¿n táº¡i má»™t Ä‘iá»ƒm thuá»™c Ä‘Æ°á»ng trÃ²n", summary: "(x0 - a)(x - x0) + (y0 - b)(y - y0) = 0." },
                  { key: "b", title: "Tiáº¿p tuyáº¿n káº» tá»« Ä‘iá»ƒm náº±m ngoÃ i Ä‘Æ°á»ng trÃ²n", summary: "Sá»­ dá»¥ng Ä‘iá»u kiá»‡n d(I, tiáº¿p tuyáº¿n) = R." }
                ]
              }
            ]
          },
          {
            id: "10-c7-b22",
            number: "BÃ i 22",
            title: "Ba Ä‘Æ°á»ng conic",
            sections: [
              {
                id: "10-c7-b22-s1",
                num: "1",
                title: "ÄÆ°á»ng elip",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a elip", summary: "Táº­p há»£p cÃ¡c Ä‘iá»ƒm cÃ³ tá»•ng khoáº£ng cÃ¡ch tá»›i hai tiÃªu Ä‘iá»ƒm MF1 + MF2 = 2a." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh chÃ­nh táº¯c cá»§a elip", summary: "xÂ²/aÂ² + yÂ²/bÂ² = 1 vá»›i bÂ² = aÂ² - cÂ²." }
                ]
              },
              {
                id: "10-c7-b22-s2",
                num: "2",
                title: "ÄÆ°á»ng hypebol",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a hypebol", summary: "Táº­p há»£p cÃ¡c Ä‘iá»ƒm cÃ³ giÃ¡ trá»‹ tuyá»‡t Ä‘á»‘i hiá»‡u khoáº£ng cÃ¡ch |MF1 - MF2| = 2a." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh chÃ­nh táº¯c cá»§a hypebol", summary: "xÂ²/aÂ² - yÂ²/bÂ² = 1 vá»›i bÂ² = cÂ² - aÂ²." }
                ]
              },
              {
                id: "10-c7-b22-s3",
                num: "3",
                title: "ÄÆ°á»ng parabol",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a parabol", summary: "Táº­p há»£p cÃ¡c Ä‘iá»ƒm cÃ¡ch Ä‘á»u tiÃªu Ä‘iá»ƒm F vÃ  Ä‘Æ°á»ng chuáº©n Î”." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh chÃ­nh táº¯c cá»§a parabol", summary: "yÂ² = 2px (p > 0) vá»›i tiÃªu Ä‘iá»ƒm F(p/2; 0) vÃ  Ä‘Æ°á»ng chuáº©n x = -p/2." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-8",
        number: "ChÆ°Æ¡ng VIII",
        title: "Äáº¡i sá»‘ tá»• há»£p",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "10-c8-b23",
            number: "BÃ i 23",
            title: "Quy táº¯c Ä‘áº¿m",
            sections: [
              {
                id: "10-c8-b23-s1",
                num: "1",
                title: "Quy táº¯c cá»™ng",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a quy táº¯c cá»™ng", summary: "CÃ´ng viá»‡c thá»±c hiá»‡n bá»Ÿi má»™t trong hai hÃ nh Ä‘á»™ng khÃ´ng giao nhau: m + n cÃ¡ch." },
                  { key: "b", title: "SÆ¡ Ä‘á»“ hÃ¬nh cÃ¢y Ã¡p dá»¥ng quy táº¯c cá»™ng", summary: "Dá»±ng nhÃ¡nh phÃ¢n tÃ­ch cÃ¡c phÆ°Æ¡ng Ã¡n lá»±a chá»n Ä‘á»™c láº­p." }
                ]
              },
              {
                id: "10-c8-b23-s2",
                num: "2",
                title: "Quy táº¯c nhÃ¢n",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a quy táº¯c nhÃ¢n", summary: "CÃ´ng viá»‡c gá»“m nhiá»u cÃ´ng Ä‘oáº¡n liÃªn tiáº¿p: m . n cÃ¡ch." },
                  { key: "b", title: "Phá»‘i há»£p quy táº¯c cá»™ng vÃ  quy táº¯c nhÃ¢n", summary: "Chia trÆ°á»ng há»£p vÃ  phÃ¢n chia cÃ¡c bÆ°á»›c giáº£i quyáº¿t bÃ i toÃ¡n Ä‘áº¿m phá»©c táº¡p." }
                ]
              }
            ]
          },
          {
            id: "10-c8-b24",
            number: "BÃ i 24",
            title: "HoÃ¡n vá»‹, chá»‰nh há»£p vÃ  tá»• há»£p",
            sections: [
              {
                id: "10-c8-b24-s1",
                num: "1",
                title: "HoÃ¡n vá»‹",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m hoÃ¡n vá»‹", summary: "Má»—i cÃ¡ch sáº¯p xáº¿p thá»© tá»± n pháº§n tá»­ cá»§a má»™t táº­p há»£p." },
                  { key: "b", title: "CÃ´ng thá»©c sá»‘ hoÃ¡n vá»‹ Pn", summary: "Pn = n! = 1 . 2 . ... . n (quy Æ°á»›c 0! = 1)." }
                ]
              },
              {
                id: "10-c8-b24-s2",
                num: "2",
                title: "Chá»‰nh há»£p",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m chá»‰nh há»£p", summary: "Chá»n k pháº§n tá»­ tá»« n pháº§n tá»­ vÃ  sáº¯p xáº¿p theo thá»© tá»±." },
                  { key: "b", title: "CÃ´ng thá»©c sá»‘ chá»‰nh há»£p Ank", summary: "Ank = n! / (n - k)!." }
                ]
              },
              {
                id: "10-c8-b24-s3",
                num: "3",
                title: "Tá»• há»£p",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m tá»• há»£p", summary: "Chá»n k pháº§n tá»­ tá»« n pháº§n tá»­ khÃ´ng phÃ¢n biá»‡t thá»© tá»±." },
                  { key: "b", title: "CÃ´ng thá»©c sá»‘ tá»• há»£p Cnk vÃ  tÃ­nh cháº¥t", summary: "Cnk = n! / (k!(n-k)!); tÃ­nh cháº¥t Ä‘á»‘i xá»©ng vÃ  há»‡ thá»©c Pascal." }
                ]
              }
            ]
          },
          {
            id: "10-c8-b25",
            number: "BÃ i 25",
            title: "Nhá»‹ thá»©c Newton",
            sections: [
              {
                id: "10-c8-b25-s1",
                num: "1",
                title: "CÃ´ng thá»©c nhá»‹ thá»©c Newton",
                subsections: [
                  { key: "a", title: "Khai triá»ƒn (a + b)â´", summary: "(a+b)â´ = aâ´ + 4aÂ³b + 6aÂ²bÂ² + 4abÂ³ + bâ´." },
                  { key: "b", title: "Khai triá»ƒn (a + b)âµ", summary: "(a+b)âµ = aâµ + 5aâ´b + 10aÂ³bÂ² + 10aÂ²bÂ³ + 5abâ´ + bâµ." }
                ]
              },
              {
                id: "10-c8-b25-s2",
                num: "2",
                title: "á»¨ng dá»¥ng cá»§a nhá»‹ thá»©c Newton",
                subsections: [
                  { key: "a", title: "TÃ¬m há»‡ sá»‘ cá»§a sá»‘ háº¡ng trong khai triá»ƒn", summary: "PhÆ°Æ¡ng phÃ¡p xÃ¡c Ä‘á»‹nh há»‡ sá»‘ chá»©a x^k trong cÃ¡c biá»ƒu thá»©c Ä‘a thá»©c." },
                  { key: "b", title: "TÃ­nh tá»•ng cÃ¡c há»‡ sá»‘ tá»• há»£p", summary: "Ká»¹ thuáº­t gÃ¡n giÃ¡ trá»‹ Ä‘áº·c biá»‡t a = 1, b = 1 vÃ o khai triá»ƒn nhá»‹ thá»©c." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-9",
        number: "ChÆ°Æ¡ng IX",
        title: "TÃ­nh xÃ¡c suáº¥t theo Ä‘á»‹nh nghÄ©a cá»• Ä‘iá»ƒn",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "10-c9-b26",
            number: "BÃ i 26",
            title: "Biáº¿n cá»‘ vÃ  Ä‘á»‹nh nghÄ©a cá»• Ä‘iá»ƒn cá»§a xÃ¡c suáº¥t",
            sections: [
              {
                id: "10-c9-b26-s1",
                num: "1",
                title: "PhÃ©p thá»­ ngáº«u nhiÃªn vÃ  biáº¿n cá»‘",
                subsections: [
                  { key: "a", title: "KhÃ´ng gian máº«u Î©", summary: "Táº­p há»£p táº¥t cáº£ cÃ¡c káº¿t quáº£ cÃ³ thá»ƒ xáº£y ra cá»§a má»™t phÃ©p thá»­ ngáº«u nhiÃªn." },
                  { key: "b", title: "Biáº¿n cá»‘ vÃ  cÃ¡c loáº¡i biáº¿n cá»‘", summary: "Biáº¿n cá»‘ lÃ  táº­p con cá»§a Î©; biáº¿n cá»‘ khÃ´ng thá»ƒ âˆ…, biáº¿n cá»‘ cháº¯c cháº¯n Î©, biáº¿n cá»‘ Ä‘á»‘i." }
                ]
              },
              {
                id: "10-c9-b26-s2",
                num: "2",
                title: "Äá»‹nh nghÄ©a cá»• Ä‘iá»ƒn cá»§a xÃ¡c suáº¥t",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c xÃ¡c suáº¥t cá»• Ä‘iá»ƒn", summary: "P(A) = n(A) / n(Î©) khi cÃ¡c káº¿t quáº£ cÃ³ cÃ¹ng kháº£ nÄƒng xuáº¥t hiá»‡n." },
                  { key: "b", title: "TÃ­nh cháº¥t cá»§a xÃ¡c suáº¥t", summary: "0 <= P(A) <= 1; P(âˆ…) = 0; P(Î©) = 1; P(A_) = 1 - P(A)." }
                ]
              }
            ]
          },
          {
            id: "10-c9-b27",
            number: "BÃ i 27",
            title: "Thá»±c hÃ nh tÃ­nh xÃ¡c suáº¥t theo Ä‘á»‹nh nghÄ©a cá»• Ä‘iá»ƒn",
            sections: [
              {
                id: "10-c9-b27-s1",
                num: "1",
                title: "Sá»­ dá»¥ng sÆ¡ Ä‘á»“ hÃ¬nh cÃ¢y tÃ­nh xÃ¡c suáº¥t",
                subsections: [
                  { key: "a", title: "Dá»±ng sÆ¡ Ä‘á»“ hÃ¬nh cÃ¢y mÃ´ táº£ phÃ©p thá»­", summary: "Biá»ƒu diá»…n trá»±c quan cÃ¡c giai Ä‘oáº¡n cá»§a phÃ©p thá»­ ngáº«u nhiÃªn nhiá»u bÆ°á»›c." },
                  { key: "b", title: "TÃ­nh xÃ¡c suáº¥t báº±ng Ä‘áº¿m nhÃ¡nh káº¿t quáº£", summary: "Äáº¿m sá»‘ nhÃ¡nh thuáº­n lá»£i vÃ  tá»•ng sá»‘ nhÃ¡nh trong sÆ¡ Ä‘á»“ hÃ¬nh cÃ¢y." }
                ]
              },
              {
                id: "10-c9-b27-s2",
                num: "2",
                title: "Sá»­ dá»¥ng cÃ¡c quy táº¯c Ä‘áº¿m tÃ­nh xÃ¡c suáº¥t",
                subsections: [
                  { key: "a", title: "TÃ­nh sá»‘ pháº§n tá»­ báº±ng quy táº¯c tá»• há»£p", summary: "Ãp dá»¥ng hoÃ¡n vá»‹, chá»‰nh há»£p, tá»• há»£p Ä‘á»ƒ Ä‘áº¿m n(Î©) vÃ  n(A)." },
                  { key: "b", title: "BÃ i toÃ¡n chá»n tháº», rÃºt bÃ i, bá»‘c bÃ³ng", summary: "CÃ¡c dáº¡ng bÃ i toÃ¡n xÃ¡c suáº¥t thá»±c hÃ nh thÆ°á»ng gáº·p trong Ä‘á» thi." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "11": {
    grade: "11",
    gradeTitle: "ToÃ¡n Lá»›p 11",
    subtitle: "ChÆ°Æ¡ng trÃ¬nh GDPT 2018 â€¢ Bá»™ sÃ¡ch Káº¿t ná»‘i tri thá»©c vá»›i cuá»™c sá»‘ng",
    chapters: [
      {
        id: "c11-1",
        number: "ChÆ°Æ¡ng I",
        title: "HÃ m sá»‘ lÆ°á»£ng giÃ¡c vÃ  phÆ°Æ¡ng trÃ¬nh lÆ°á»£ng giÃ¡c",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "11-c1-b1",
            number: "BÃ i 1",
            title: "GiÃ¡ trá»‹ lÆ°á»£ng giÃ¡c cá»§a gÃ³c lÆ°á»£ng giÃ¡c",
            sections: [
              {
                id: "11-c1-b1-s1",
                num: "1",
                title: "GÃ³c lÆ°á»£ng giÃ¡c vÃ  Ä‘Æ¡n vá»‹ raÄ‘ian",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m gÃ³c lÆ°á»£ng giÃ¡c", summary: "Tia Ä‘áº§u, tia cuá»‘i, chiá»u quay dÆ°Æ¡ng/Ã¢m vÃ  sá»‘ Ä‘o gÃ³c lÆ°á»£ng giÃ¡c tá»•ng quÃ¡t Î± + k360Â°." },
                  { key: "b", title: "ÄÆ¡n vá»‹ raÄ‘ian vÃ  cÃ´ng thá»©c Ä‘á»•i Ä‘Æ¡n vá»‹", summary: "1 rad = 180Â°/Ï€; cÃ´ng thá»©c Ä‘á»™ dÃ i cung trÃ²n l = Î±.R." }
                ]
              },
              {
                id: "11-c1-b1-s2",
                num: "2",
                title: "ÄÆ°á»ng trÃ²n lÆ°á»£ng giÃ¡c vÃ  giÃ¡ trá»‹ lÆ°á»£ng giÃ¡c",
                subsections: [
                  { key: "a", title: "ÄÆ°á»ng trÃ²n lÆ°á»£ng giÃ¡c", summary: "ÄÆ°á»ng trÃ²n Ä‘á»‹nh hÆ°á»›ng tÃ¢m O, bÃ¡n kÃ­nh 1 vá»›i Ä‘iá»ƒm gá»‘c A(1; 0)." },
                  { key: "b", title: "Äá»‹nh nghÄ©a sin, cos, tan, cot", summary: "Trá»¥c hoÃ nh lÃ  trá»¥c cÃ´sin, trá»¥c tung lÃ  trá»¥c sin, trá»¥c tan vÃ  trá»¥c cot." }
                ]
              },
              {
                id: "11-c1-b1-s3",
                num: "3",
                title: "Há»‡ thá»©c lÆ°á»£ng giÃ¡c cÆ¡ báº£n vÃ  giÃ¡ trá»‹ gÃ³c liÃªn quan Ä‘áº·c biá»‡t",
                subsections: [
                  { key: "a", title: "CÃ¡c há»‡ thá»©c lÆ°á»£ng giÃ¡c cÆ¡ báº£n", summary: "sinÂ²Î± + cosÂ²Î± = 1; 1 + tanÂ²Î± = 1/cosÂ²Î±; 1 + cotÂ²Î± = 1/sinÂ²Î±; tanÎ±.cotÎ± = 1." },
                  { key: "b", title: "GiÃ¡ trá»‹ gÃ³c liÃªn quan Ä‘áº·c biá»‡t", summary: "Cung Ä‘á»‘i nhau, bÃ¹ nhau, hÆ¡n kÃ©m Ï€, phá»¥ nhau, hÆ¡n kÃ©m Ï€/2." }
                ]
              }
            ]
          },
          {
            id: "11-c1-b2",
            number: "BÃ i 2",
            title: "CÃ´ng thá»©c lÆ°á»£ng giÃ¡c",
            sections: [
              {
                id: "11-c1-b2-s1",
                num: "1",
                title: "CÃ´ng thá»©c cá»™ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c cá»™ng sin, cos, tan", summary: "cos(a Â± b) = cos a cos b âˆ“ sin a sin b; sin(a Â± b) = sin a cos b Â± cos a sin b." },
                  { key: "b", title: "á»¨ng dá»¥ng tÃ­nh giÃ¡ trá»‹ lÆ°á»£ng giÃ¡c", summary: "TÃ­nh giÃ¡ trá»‹ cá»§a cÃ¡c gÃ³c khÃ´ng Ä‘áº·c biá»‡t Ä‘Æ°a vá» tá»•ng/hiá»‡u cá»§a cÃ¡c gÃ³c Ä‘áº·c biá»‡t." }
                ]
              },
              {
                id: "11-c1-b2-s2",
                num: "2",
                title: "CÃ´ng thá»©c nhÃ¢n Ä‘Ã´i vÃ  háº¡ báº­c",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c nhÃ¢n Ä‘Ã´i", summary: "sin 2a = 2 sin a cos a; cos 2a = cosÂ²a - sinÂ²a = 2cosÂ²a - 1 = 1 - 2sinÂ²a." },
                  { key: "b", title: "CÃ´ng thá»©c háº¡ báº­c", summary: "cosÂ²a = (1 + cos 2a)/2; sinÂ²a = (1 - cos 2a)/2." }
                ]
              },
              {
                id: "11-c1-b2-s3",
                num: "3",
                title: "CÃ´ng thá»©c biáº¿n Ä‘á»•i tÃ­ch thÃ nh tá»•ng vÃ  tá»•ng thÃ nh tÃ­ch",
                subsections: [
                  { key: "a", title: "Biáº¿n Ä‘á»•i tÃ­ch thÃ nh tá»•ng", summary: "cos a cos b = 1/2 [cos(a-b) + cos(a+b)]; sin a sin b = 1/2 [cos(a-b) - cos(a+b)]." },
                  { key: "b", title: "Biáº¿n Ä‘á»•i tá»•ng thÃ nh tÃ­ch", summary: "cos u + cos v = 2 cos((u+v)/2) cos((u-v)/2); sin u + sin v = 2 sin((u+v)/2) cos((u-v)/2)." }
                ]
              }
            ]
          },
          {
            id: "11-c1-b3",
            number: "BÃ i 3",
            title: "HÃ m sá»‘ lÆ°á»£ng giÃ¡c",
            sections: [
              {
                id: "11-c1-b3-s1",
                num: "1",
                title: "HÃ m sá»‘ y = sin x vÃ  hÃ m sá»‘ y = cos x",
                subsections: [
                  { key: "a", title: "Táº­p xÃ¡c Ä‘á»‹nh, chu kÃ¬ vÃ  tÃ­nh cháºµn láº»", summary: "y = sin x lÃ  hÃ m sá»‘ láº», chu kÃ¬ 2Ï€; y = cos x lÃ  hÃ m sá»‘ cháºµn, chu kÃ¬ 2Ï€." },
                  { key: "b", title: "Äá»“ thá»‹ vÃ  báº£ng biáº¿n thiÃªn", summary: "ÄÆ°á»ng hÃ¬nh sin, cá»±c Ä‘áº¡i, cá»±c tiá»ƒu vÃ  cÃ¡c khoáº£ng Ä‘á»“ng biáº¿n, nghá»‹ch biáº¿n." }
                ]
              },
              {
                id: "11-c1-b3-s2",
                num: "2",
                title: "HÃ m sá»‘ y = tan x vÃ  hÃ m sá»‘ y = cot x",
                subsections: [
                  { key: "a", title: "Táº­p xÃ¡c Ä‘á»‹nh vÃ  tÃ­nh tuáº§n hoÃ n", summary: "y = tan x cÃ³ D = R \\ {Ï€/2 + kÏ€}, chu kÃ¬ Ï€; y = cot x cÃ³ D = R \\ {kÏ€}, chu kÃ¬ Ï€." },
                  { key: "b", title: "Äá»“ thá»‹ vÃ  tÃ­nh Ä‘Æ¡n Ä‘iá»‡u", summary: "TÃ­nh Ä‘á»“ng biáº¿n cá»§a hÃ m tan vÃ  tÃ­nh nghá»‹ch biáº¿n cá»§a hÃ m cot trÃªn tá»«ng khoáº£ng xÃ¡c Ä‘á»‹nh." }
                ]
              }
            ]
          },
          {
            id: "11-c1-b4",
            number: "BÃ i 4",
            title: "PhÆ°Æ¡ng trÃ¬nh lÆ°á»£ng giÃ¡c cÆ¡ báº£n",
            sections: [
              {
                id: "11-c1-b4-s1",
                num: "1",
                title: "PhÆ°Æ¡ng trÃ¬nh sin x = m vÃ  cos x = m",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c nghiá»‡m phÆ°Æ¡ng trÃ¬nh sin x = m", summary: "Äiá»u kiá»‡n cÃ³ nghiá»‡m |m| <= 1; x = Î± + k2Ï€ hoáº·c x = Ï€ - Î± + k2Ï€." },
                  { key: "b", title: "CÃ´ng thá»©c nghiá»‡m phÆ°Æ¡ng trÃ¬nh cos x = m", summary: "Äiá»u kiá»‡n cÃ³ nghiá»‡m |m| <= 1; x = Â±Î± + k2Ï€." }
                ]
              },
              {
                id: "11-c1-b4-s2",
                num: "2",
                title: "PhÆ°Æ¡ng trÃ¬nh tan x = m vÃ  cot x = m",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c nghiá»‡m phÆ°Æ¡ng trÃ¬nh tan x = m", summary: "LuÃ´n cÃ³ nghiá»‡m vá»›i má»i m; x = arctan m + kÏ€." },
                  { key: "b", title: "CÃ´ng thá»©c nghiá»‡m phÆ°Æ¡ng trÃ¬nh cot x = m", summary: "LuÃ´n cÃ³ nghiá»‡m vá»›i má»i m; x = arccot m + kÏ€." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-2",
        number: "ChÆ°Æ¡ng II",
        title: "DÃ£y sá»‘. Cáº¥p sá»‘ cá»™ng vÃ  cáº¥p sá»‘ nhÃ¢n",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "11-c2-b5",
            number: "BÃ i 5",
            title: "DÃ£y sá»‘",
            sections: [
              {
                id: "11-c2-b5-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m dÃ£y sá»‘",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a dÃ£y sá»‘ vÃ´ háº¡n vÃ  há»¯u háº¡n", summary: "HÃ m sá»‘ u xÃ¡c Ä‘á»‹nh trÃªn táº­p sá»‘ nguyÃªn dÆ°Æ¡ng N*." },
                  { key: "b", title: "CÃ¡ch cho má»™t dÃ£y sá»‘", summary: "Cho bá»Ÿi cÃ´ng thá»©c sá»‘ háº¡ng tá»•ng quÃ¡t, báº±ng quy náº¡p (truy há»“i) hoáº·c diá»…n Ä‘áº¡t báº±ng lá»i." }
                ]
              },
              {
                id: "11-c2-b5-s2",
                num: "2",
                title: "DÃ£y sá»‘ tÄƒng, dÃ£y sá»‘ giáº£m vÃ  dÃ£y sá»‘ bá»‹ cháº·n",
                subsections: [
                  { key: "a", title: "DÃ£y sá»‘ tÄƒng, dÃ£y sá»‘ giáº£m", summary: "un+1 > un vá»›i má»i n (dÃ£y tÄƒng); un+1 < un vá»›i má»i n (dÃ£y giáº£m)." },
                  { key: "b", title: "DÃ£y sá»‘ bá»‹ cháº·n", summary: "KhÃ¡i niá»‡m bá»‹ cháº·n trÃªn (un <= M), bá»‹ cháº·n dÆ°á»›i (un >= m) vÃ  bá»‹ cháº·n." }
                ]
              }
            ]
          },
          {
            id: "11-c2-b6",
            number: "BÃ i 6",
            title: "Cáº¥p sá»‘ cá»™ng",
            sections: [
              {
                id: "11-c2-b6-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a vÃ  sá»‘ háº¡ng tá»•ng quÃ¡t",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a cáº¥p sá»‘ cá»™ng vÃ  cÃ´ng sai d", summary: "un+1 = un + d vá»›i má»i n >= 1." },
                  { key: "b", title: "Sá»‘ háº¡ng tá»•ng quÃ¡t un", summary: "un = u1 + (n - 1)d." }
                ]
              },
              {
                id: "11-c2-b6-s2",
                num: "2",
                title: "Tá»•ng cá»§a n sá»‘ háº¡ng Ä‘áº§u tiÃªn",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh Sn", summary: "Sn = n(u1 + un)/2 = n[2u1 + (n-1)d]/2." },
                  { key: "b", title: "á»¨ng dá»¥ng giáº£i quyáº¿t bÃ i toÃ¡n thá»±c táº¿", summary: "BÃ i toÃ¡n xáº¿p gháº¿ nhÃ  hÃ¡t, sá»‘ tiá»n tÃ­ch luá»¹ theo cáº¥p sá»‘." }
                ]
              }
            ]
          },
          {
            id: "11-c2-b7",
            number: "BÃ i 7",
            title: "Cáº¥p sá»‘ nhÃ¢n",
            sections: [
              {
                id: "11-c2-b7-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a vÃ  sá»‘ háº¡ng tá»•ng quÃ¡t",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a cáº¥p sá»‘ nhÃ¢n vÃ  cÃ´ng bá»™i q", summary: "un+1 = un . q vá»›i má»i n >= 1." },
                  { key: "b", title: "Sá»‘ háº¡ng tá»•ng quÃ¡t un", summary: "un = u1 . q^(n-1)." }
                ]
              },
              {
                id: "11-c2-b7-s2",
                num: "2",
                title: "Tá»•ng cá»§a n sá»‘ háº¡ng Ä‘áº§u tiÃªn",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh Sn", summary: "Sn = u1(1 - q^n)/(1 - q) vá»›i q â‰  1." },
                  { key: "b", title: "á»¨ng dá»¥ng lÃ£i kÃ©p vÃ  tÄƒng trÆ°á»Ÿng dÃ¢n sá»‘", summary: "MÃ´ hÃ¬nh tÄƒng trÆ°á»Ÿng sá»‘ mÅ© trong kinh táº¿ tÃ i chÃ­nh vÃ  sinh há»c." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-3",
        number: "ChÆ°Æ¡ng III",
        title: "CÃ¡c sá»‘ Ä‘áº·c trÆ°ng Ä‘o xu tháº¿ trung tÃ¢m cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "11-c3-b8",
            number: "BÃ i 8",
            title: "Máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
            sections: [
              {
                id: "11-c3-b8-s1",
                num: "1",
                title: "Thu tháº­p vÃ  phÃ¢n nhÃ³m sá»‘ liá»‡u",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m", summary: "NhÃ³m sá»‘ liá»‡u theo cÃ¡c ná»­a khoáº£ng [ai; ai+1)." },
                  { key: "b", title: "Báº£ng táº§n sá»‘ ghÃ©p nhÃ³m", summary: "CÃ¡ch Ä‘áº¿m táº§n sá»‘ mi cá»§a tá»«ng nhÃ³m sá»‘ liá»‡u." }
                ]
              },
              {
                id: "11-c3-b8-s2",
                num: "2",
                title: "Biá»ƒu diá»…n máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "Táº§n sá»‘ tÆ°Æ¡ng Ä‘á»‘i ghÃ©p nhÃ³m", summary: "fi = mi / n vÃ  báº£ng phÃ¢n bá»‘ pháº§n trÄƒm." },
                  { key: "b", title: "Biá»ƒu Ä‘á»“ táº§n sá»‘ ghÃ©p nhÃ³m", summary: "Biá»ƒu Ä‘á»“ cá»™t liá»n ká» thá»ƒ hiá»‡n Ä‘á»™ rá»™ng vÃ  Ä‘á»™ cao cÃ¡c nhÃ³m sá»‘ liá»‡u." }
                ]
              }
            ]
          },
          {
            id: "11-c3-b9",
            number: "BÃ i 9",
            title: "CÃ¡c sá»‘ Ä‘áº·c trÆ°ng Ä‘o xu tháº¿ trung tÃ¢m",
            sections: [
              {
                id: "11-c3-b9-s1",
                num: "1",
                title: "Sá»‘ trung bÃ¬nh",
                subsections: [
                  { key: "a", title: "GiÃ¡ trá»‹ Ä‘áº¡i diá»‡n cá»§a nhÃ³m ci", summary: "ci = (ai + ai+1) / 2 lÃ  trung Ä‘iá»ƒm khoáº£ng nhÃ³m." },
                  { key: "b", title: "CÃ´ng thá»©c tÃ­nh sá»‘ trung bÃ¬nh ghÃ©p nhÃ³m", summary: "xÌ„ = (1/n) âˆ‘ mi.ci vÃ  Ã½ nghÄ©a." }
                ]
              },
              {
                id: "11-c3-b9-s2",
                num: "2",
                title: "Trung vá»‹ vÃ  tá»© phÃ¢n vá»‹ cá»§a máº«u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh trung vá»‹ Me", summary: "XÃ¡c Ä‘á»‹nh nhÃ³m chá»©a trung vá»‹ vÃ  cÃ´ng thá»©c ná»™i suy trung vá»‹." },
                  { key: "b", title: "CÃ´ng thá»©c tÃ­nh cÃ¡c tá»© phÃ¢n vá»‹ Q1, Q2, Q3", summary: "Ná»™i suy tá»© phÃ¢n vá»‹ thá»© nháº¥t vÃ  thá»© ba trong máº«u ghÃ©p nhÃ³m." }
                ]
              },
              {
                id: "11-c3-b9-s3",
                num: "3",
                title: "Má»‘t cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "NhÃ³m chá»©a má»‘t vÃ  cÃ´ng thá»©c Mo", summary: "NhÃ³m cÃ³ táº§n sá»‘ lá»›n nháº¥t vÃ  cÃ´ng thá»©c ná»™i suy má»‘t Mo." },
                  { key: "b", title: "Ã nghÄ©a vÃ  so sÃ¡nh vá»›i máº«u khÃ´ng ghÃ©p nhÃ³m", summary: "á»¨ng dá»¥ng trong phÃ¢n tÃ­ch thá»‘ng kÃª thá»±c táº¿." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-4",
        number: "ChÆ°Æ¡ng IV",
        title: "Quan há»‡ song song trong khÃ´ng gian",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "11-c4-b10",
            number: "BÃ i 10",
            title: "ÄÆ°á»ng tháº³ng vÃ  máº·t pháº³ng trong khÃ´ng gian",
            sections: [
              {
                id: "11-c4-b10-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m má»Ÿ Ä‘áº§u",
                subsections: [
                  { key: "a", title: "Máº·t pháº³ng vÃ  cÃ¡c tÃ­nh cháº¥t thá»«a nháº­n", summary: "Äiá»ƒm thuá»™c máº·t pháº³ng, Ä‘Æ°á»ng tháº³ng náº±m trong máº·t pháº³ng vÃ  cÃ¡c tiÃªn Ä‘á» Hilbert cÆ¡ báº£n." },
                  { key: "b", title: "Ba cÃ¡ch xÃ¡c Ä‘á»‹nh má»™t máº·t pháº³ng", summary: "Qua ba Ä‘iá»ƒm khÃ´ng tháº³ng hÃ ng, qua má»™t Ä‘Æ°á»ng tháº³ng vÃ  Ä‘iá»ƒm ngoÃ i, qua hai Ä‘Æ°á»ng tháº³ng cáº¯t nhau." }
                ]
              },
              {
                id: "11-c4-b10-s2",
                num: "2",
                title: "HÃ¬nh chÃ³p vÃ  hÃ¬nh tá»© diá»‡n",
                subsections: [
                  { key: "a", title: "HÃ¬nh chÃ³p", summary: "Äá»‰nh, Ä‘Ã¡y, cÃ¡c máº·t bÃªn, cÃ¡c cáº¡nh bÃªn vÃ  quy táº¯c váº½ hÃ¬nh." },
                  { key: "b", title: "HÃ¬nh tá»© diá»‡n", summary: "HÃ¬nh bá»‘n máº·t tam giÃ¡c vÃ  cÃ¡c cáº¡nh Ä‘á»‘i diá»‡n." }
                ]
              }
            ]
          },
          {
            id: "11-c4-b11",
            number: "BÃ i 11",
            title: "Hai Ä‘Æ°á»ng tháº³ng song song",
            isFeaturedLesson: true,
            isOlmInteractive: true,
            teacherWelcome: {
              greetingText: "Tháº§y SÃ¡ng chÃ o cáº£ lá»›p! HÃ´m nay tháº§y ráº¥t vui vÃ¬ Ä‘Æ°á»£c Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c em trong tiáº¿t há»c nÃ y. Tháº§y hy vá»ng cÃ¹ng cÃ¡c em tháº¯p sÃ¡ng lÃªn nhá»¯ng kiáº¿n thá»©c má»›i, nhá»¯ng gÃ³c nhÃ¬n thÃº vá»‹ trong bÃ i há»c toÃ¡n ngÃ y hÃ´m nay. CÃ¡c em Ä‘Ã£ sáºµn sÃ ng trÃ n Ä‘áº§y nÄƒng lÆ°á»£ng cÃ¹ng tháº§y chÆ°a? ChÃºng ta báº¯t Ä‘áº§u nhÃ©!",
              audioScript: "Tháº§y SÃ¡ng chÃ o cáº£ lá»›p! HÃ´m nay tháº§y ráº¥t vui vÃ¬ Ä‘Æ°á»£c Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c em trong tiáº¿t há»c nÃ y. Tháº§y hy vá»ng cÃ¹ng cÃ¡c em tháº¯p sÃ¡ng lÃªn nhá»¯ng kiáº¿n thá»©c má»›i, nhá»¯ng gÃ³c nhÃ¬n thÃº vá»‹ trong bÃ i há»c toÃ¡n ngÃ y hÃ´m nay. CÃ¡c em Ä‘Ã£ sáºµn sÃ ng trÃ n Ä‘áº§y nÄƒng lÆ°á»£ng cÃ¹ng tháº§y chÆ°a? ChÃºng ta báº¯t Ä‘áº§u nhÃ©!",
              audioUrl: "assets/audio/b11_11_welcome.mp3"
            },
            learningGoals: [
              "Nháº­n biáº¿t vÃ  phÃ¢n biá»‡t chÃ­nh xÃ¡c 4 vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a hai Ä‘Æ°á»ng tháº³ng trong khÃ´ng gian: cáº¯t nhau, trÃ¹ng nhau, song song vÃ  chÃ©o nhau.",
              "Náº¯m vá»¯ng Ä‘á»‹nh nghÄ©a hai Ä‘Æ°á»ng tháº³ng song song trong khÃ´ng gian vÃ  hai tÃ­nh cháº¥t ná»n táº£ng: tÃ­nh duy nháº¥t qua má»™t Ä‘iá»ƒm náº±m ngoÃ i Ä‘Æ°á»ng tháº³ng vÃ  tÃ­nh cháº¥t báº¯c cáº§u ($a // c$ vÃ  $b // c \\Rightarrow a // b$).",
              "LÃ m chá»§ Äá»‹nh lÃ½ giao tuyáº¿n cá»§a ba máº·t pháº³ng cÃ¹ng há»‡ quáº£ quan trá»ng: tÃ¬m giao tuyáº¿n song song cá»§a hai máº·t pháº³ng láº§n lÆ°á»£t chá»©a hai Ä‘Æ°á»ng tháº³ng song song.",
              "Váº­n dá»¥ng thÃ nh tháº¡o cÃ¡c phÆ°Æ¡ng phÃ¡p chá»©ng minh hai Ä‘Æ°á»ng tháº³ng song song (Ä‘Æ°a vá» hÃ¬nh há»c pháº³ng báº±ng Ä‘Æ°á»ng trung bÃ¬nh, Ä‘á»‹nh lÃ½ Ta-lÃ©t, hÃ¬nh bÃ¬nh hÃ nh hoáº·c dÃ¹ng Ä‘á»‹nh lÃ½ giao tuyáº¿n) vÃ  giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n thiáº¿t diá»‡n."
            ],
            goalsAudioUrl: "assets/audio/b11_11_goals.mp3",
            hook: {
              title: "TÃ¬nh huá»‘ng thá»±c táº¿: CÃ¢y cáº§u sáº¯t vÃ  bÃ­ áº©n cÃ¡c Ä‘Æ°á»ng tháº³ng khÃ´ng cáº¯t nhau",
              story: "CÃ¡c em hÃ£y cÃ¹ng Tháº§y quan sÃ¡t má»™t hÃ¬nh áº£nh quen thuá»™c: TrÃªn má»™t cÃ¢y cáº§u sáº¯t hoáº·c cáº§u vÆ°á»£t giao thÃ´ng, cÃ¡c thanh ray tÃ u há»a cháº¡y dÃ i song song vá»›i nhau trÃªn cÃ¹ng má»™t máº·t sÃ n vÃ  khÃ´ng bao giá» gáº·p nhau. Tháº¿ nhÆ°ng, hÃ£y nhÃ¬n thanh ray tÃ u cháº¡y phÃ­a dÆ°á»›i vá»›i má»™t Ä‘Æ°á»ng dÃ¢y cÃ¡p Ä‘iá»‡n trÃªn cao hoáº·c thanh lan can cá»§a táº§ng trÃªn: chÃºng cÅ©ng khÃ´ng bao giá» cáº¯t nhau, nhÆ°ng chÃºng láº¡i khÃ´ng há» song song vÃ¬ chÃºng náº±m á»Ÿ hai Ä‘á»™ cao khÃ¡c nhau vÃ  hÆ°á»›ng lá»‡ch nhau trong khÃ´ng gian! Táº¡i sao cÃ¹ng lÃ  khÃ´ng cáº¯t nhau, nhÆ°ng cáº·p nÃ y láº¡i song song, cÃ²n cáº·p kia láº¡i chÃ©o nhau? BÃ i há»c Hai Ä‘Æ°á»ng tháº³ng song song ngÃ y hÃ´m nay sáº½ giÃºp cÃ¡c em phÃ¢n biá»‡t chÃ­nh xÃ¡c báº£n cháº¥t khÃ´ng gian nÃ y vÃ  lÃ m chá»§ cÃ¡c Ä‘á»‹nh lÃ½ ná»n táº£ng cá»§a hÃ¬nh há»c ba chiá»u!",
              audioUrl: "assets/audio/b11_11_hook.mp3",
              bridge: "Äá»ƒ giáº£i mÃ£ trá»n váº¹n cÃ¢u há»i thÃº vá»‹ nÃ y, Tháº§y trÃ² mÃ¬nh sáº½ cÃ¹ng bÆ°á»›c vÃ o tÃ¬m hiá»ƒu Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a hai Ä‘Æ°á»ng tháº³ng trong khÃ´ng gian ngay sau Ä‘Ã¢y!"
            },
            interactiveAudio: {
              title: "BÃ i giáº£ng tÆ°Æ¡ng tÃ¡c: Hai Ä‘Æ°á»ng tháº³ng song song vÃ  chÃ©o nhau trong khÃ´ng gian (Voice AI Nam Minh)",
              audioUrl: "assets/audio/b11_11_interactive_lecture.mp3",
              duration: 75,
              stops: [
                {
                  time: 30,
                  title: "Dá»«ng tÆ°Æ¡ng tÃ¡c 1: PhÃ¢n biá»‡t Song song vs ChÃ©o nhau",
                  question: "Trong khÃ´ng gian, cho hai Ä‘Æ°á»ng tháº³ng phÃ¢n biá»‡t $a$ vÃ  $b$ khÃ´ng cÃ³ Ä‘iá»ƒm chung nÃ o. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  <strong>ÄÃšNG NHáº¤T</strong>?",
                  options: [
                    "$a$ vÃ  $b$ cÃ³ thá»ƒ song song hoáº·c chÃ©o nhau",
                    "$a$ vÃ  $b$ cháº¯c cháº¯n song song vá»›i nhau",
                    "$a$ vÃ  $b$ cháº¯c cháº¯n chÃ©o nhau vá»›i nhau",
                    "$a$ vÃ  $b$ cÃ¹ng náº±m trong má»™t máº·t pháº³ng"
                  ],
                  correctIndex: 0,
                  hint: "KhÃ´ng cÃ³ Ä‘iá»ƒm chung chÆ°a Ä‘á»§ Ä‘á»ƒ kháº³ng Ä‘á»‹nh song song! Náº¿u cÃ³ má»™t máº·t pháº³ng chá»©a cáº£ hai thÃ¬ chÃºng song song, cÃ²n náº¿u khÃ´ng cÃ³ máº·t pháº³ng nÃ o chá»©a cáº£ hai thÃ¬ chÃºng chÃ©o nhau.",
                  explain: "Ráº¥t xuáº¥t sáº¯c! Trong khÃ´ng gian, hai Ä‘Æ°á»ng tháº³ng khÃ´ng cÃ³ Ä‘iá»ƒm chung cÃ³ thá»ƒ song song (náº¿u Ä‘á»“ng pháº³ng) hoáº·c chÃ©o nhau (náº¿u khÃ´ng Ä‘á»“ng pháº³ng). ÄÃ¢y lÃ  Ä‘iá»ƒm khÃ¡c biá»‡t cá»‘t lÃµi giá»¯a hÃ¬nh há»c pháº³ng vÃ  hÃ¬nh há»c khÃ´ng gian!"
                },
                {
                  time: 70,
                  title: "Dá»«ng tÆ°Æ¡ng tÃ¡c 2: Äá»‹nh lÃ½ giao tuyáº¿n cá»§a ba máº·t pháº³ng",
                  question: "Cho hai máº·t pháº³ng $(\\alpha)$ vÃ  $(\\beta)$ cáº¯t nhau theo giao tuyáº¿n $d$. Giáº£ sá»­ Ä‘Æ°á»ng tháº³ng $a \\subset (\\alpha)$ vÃ  Ä‘Æ°á»ng tháº³ng $b \\subset (\\beta)$ sao cho $a // b$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  Ä‘Ãºng?",
                  options: [
                    "Giao tuyáº¿n $d$ song song vá»›i cáº£ $a$ vÃ  $b$ (hoáº·c trÃ¹ng vá»›i má»™t trong hai Ä‘Æ°á»ng)",
                    "Giao tuyáº¿n $d$ vuÃ´ng gÃ³c vá»›i cáº£ $a$ vÃ  $b$",
                    "Giao tuyáº¿n $d$ cáº¯t $a$ táº¡i má»™t Ä‘iá»ƒm",
                    "Giao tuyáº¿n $d$ chÃ©o nhau vá»›i Ä‘Æ°á»ng tháº³ng $b$"
                  ],
                  correctIndex: 0,
                  hint: "Hai máº·t pháº³ng láº§n lÆ°á»£t chá»©a hai Ä‘Æ°á»ng tháº³ng song song thÃ¬ giao tuyáº¿n cá»§a chÃºng (náº¿u cÃ³) pháº£i song song vá»›i hai Ä‘Æ°á»ng tháº³ng áº¥y.",
                  explain: "ChÃ­nh xÃ¡c tuyá»‡t Ä‘á»‘i! ÄÃ¢y chÃ­nh lÃ  há»‡ quáº£ vÃ ng cá»§a Ä‘á»‹nh lÃ½ ba giao tuyáº¿n, Ä‘Æ°á»£c Ã¡p dá»¥ng liÃªn tá»¥c Ä‘á»ƒ tÃ¬m giao tuyáº¿n vÃ  dá»±ng thiáº¿t diá»‡n song song!"
                }
              ]
            },
            geogebra3D: {
              title: "PhÃ²ng thÃ­ nghiá»‡m hÃ¬nh há»c khÃ´ng gian 3D tÆ°Æ¡ng tÃ¡c: Hai Ä‘Æ°á»ng tháº³ng song song & chÃ©o nhau",
              description: "DÃ¹ng chuá»™t hoáº·c cháº¡m tay xoay hÃ¬nh chÃ³p 3 chiá»u Ä‘á»ƒ quan sÃ¡t sá»± khÃ¡c biá»‡t giá»¯a hai Ä‘Æ°á»ng song song vÃ  hai Ä‘Æ°á»ng chÃ©o nhau. Chuyá»ƒn Ä‘á»•i giá»¯a MÃ´ hÃ¬nh 3D Canvas vÃ  GeoGebra Web.",
              iframeUrl: "https://www.geogebra.org/material/iframe/id/krhvyyd7"
            },
            sections: [
              {
                id: "11-c4-b11-s1",
                num: "1",
                title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a hai Ä‘Æ°á»ng tháº³ng trong khÃ´ng gian",
                subsections: [
                  {
                    key: "a",
                    title: "Hai Ä‘Æ°á»ng tháº³ng Ä‘á»“ng pháº³ng (Cáº¯t nhau, TrÃ¹ng nhau, Song song)",
                    summary: "CÃ¹ng náº±m trong má»™t máº·t pháº³ng: cáº¯t nhau (1 Ä‘iá»ƒm chung), song song (0 Ä‘iá»ƒm chung) hoáº·c trÃ¹ng nhau.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec1a.mp3",
                      duration: 25,
                      coreSummary: "Má»¥c 1a: Hai Ä‘Æ°á»ng tháº³ng Ä‘á»“ng pháº³ng. Trong khÃ´ng gian, náº¿u hai Ä‘Æ°á»ng tháº³ng a vÃ  b cÃ¹ng náº±m trong má»™t máº·t pháº³ng, ta cÃ³ ba vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i quen thuá»™c cá»§a hÃ¬nh há»c pháº³ng: cáº¯t nhau táº¡i má»™t Ä‘iá»ƒm duy nháº¥t, trÃ¹ng nhau, hoáº·c song song vá»›i nhau (cÃ¹ng thuá»™c 1 máº·t pháº³ng vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung)."
                    },
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-layer-group"></i> TrÆ°á»ng há»£p 1: CÃ³ máº·t pháº³ng chá»©a cáº£ $a$ vÃ  $b$ (Ä‘á»“ng pháº³ng)</div>
                        <p>Khi hai Ä‘Æ°á»ng tháº³ng $a$ vÃ  $b$ cÃ¹ng náº±m trong má»™t máº·t pháº³ng $(\\alpha)$, vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a chÃºng giá»‘ng há»‡t nhÆ° trong hÃ¬nh há»c pháº³ng:</p>
                        <ul>
                          <li><strong>$a$ cáº¯t $b$:</strong> $a$ vÃ  $b$ cÃ³ Ä‘Ãºng má»™t Ä‘iá»ƒm chung duy nháº¥t: $a \\cap b = \\{M\\}$.</li>
                          <li><strong>$a$ song song $b$</strong> (kÃ½ hiá»‡u $a // b$): $a$ vÃ  $b$ cÃ¹ng thuá»™c $(\\alpha)$ vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung nÃ o:
                            <div class="math-highlight-box">
                              $a // b \\iff \\begin{cases} a, b \\subset (\\alpha) \\\\ a \\cap b = \\emptyset \\end{cases}$
                            </div>
                          </li>
                          <li><strong>$a$ trÃ¹ng $b$</strong> (kÃ½ hiá»‡u $a \\equiv b$): $a$ vÃ  $b$ cÃ³ tá»« hai Ä‘iá»ƒm chung phÃ¢n biá»‡t trá»Ÿ lÃªn.</li>
                        </ul>
                      </div>
                    `,
                    workedExample: {
                      title: "VÃ­ dá»¥ 1: Nháº­n biáº¿t hai Ä‘Æ°á»ng tháº³ng song song trong hÃ¬nh chÃ³p",
                      problem: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Chá»‰ ra cÃ¡c cáº·p Ä‘Æ°á»ng tháº³ng song song náº±m trong máº·t pháº³ng Ä‘Ã¡y $(ABCD)$.",
                      solution: `
                        <p>VÃ¬ tá»© giÃ¡c $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh náº±m trong máº·t pháº³ng Ä‘Ã¡y $(ABCD)$ nÃªn:</p>
                        <p>- Cáº·p cáº¡nh Ä‘á»‘i: $AB // CD$ (cÃ¹ng náº±m trong $(ABCD)$ vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung).</p>
                        <p>- Cáº·p cáº¡nh Ä‘á»‘i: $AD // BC$ (cÃ¹ng náº±m trong $(ABCD)$ vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung).</p>
                        <p>Váº­y ta cÃ³ hai cáº·p Ä‘Æ°á»ng tháº³ng song song trong máº·t pháº³ng Ä‘Ã¡y lÃ  $AB // CD$ vÃ  $AD // BC$.</p>
                      `
                    },
                    teacherTip: "LÆ°u Ã½ sá»‘ng cÃ²n cá»§a Tháº§y SÃ¡ng: Äá»‹nh nghÄ©a hai Ä‘Æ°á»ng tháº³ng song song trong khÃ´ng gian báº¯t buá»™c pháº£i cÃ³ 2 Ä‘iá»u kiá»‡n: 1) CÃ¹ng náº±m trong má»™t máº·t pháº³ng; 2) KhÃ´ng cÃ³ Ä‘iá»ƒm chung nÃ o! Thiáº¿u Ä‘iá»u kiá»‡n 'Ä‘á»“ng pháº³ng' lÃ  hoÃ n toÃ n sai!"
                  },
                  {
                    key: "b",
                    title: "Hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau trong khÃ´ng gian",
                    summary: "Hai Ä‘Æ°á»ng tháº³ng khÃ´ng cÃ¹ng náº±m trong báº¥t kÃ¬ máº·t pháº³ng nÃ o; khÃ´ng cÃ³ Ä‘iá»ƒm chung.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec1b.mp3",
                      duration: 28,
                      coreSummary: "Má»¥c 1b: Hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau. Hai Ä‘Æ°á»ng tháº³ng Ä‘Æ°á»£c gá»i lÃ  chÃ©o nhau náº¿u khÃ´ng cÃ³ báº¥t kÃ¬ máº·t pháº³ng nÃ o chá»©a cáº£ hai Ä‘Æ°á»ng tháº³ng Ä‘Ã³. Hai Ä‘Æ°á»ng chÃ©o nhau khÃ´ng cÃ¹ng thuá»™c má»™t máº·t pháº³ng vÃ  khÃ´ng bao giá» cÃ³ Ä‘iá»ƒm chung."
                    },
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-shuffle"></i> TrÆ°á»ng há»£p 2: KhÃ´ng cÃ³ máº·t pháº³ng nÃ o chá»©a cáº£ $a$ vÃ  $b$</div>
                        <p>Hai Ä‘Æ°á»ng tháº³ng Ä‘Æ°á»£c gá»i lÃ  <strong>chÃ©o nhau</strong> náº¿u khÃ´ng cÃ³ báº¥t kÃ¬ máº·t pháº³ng nÃ o chá»©a cáº£ hai Ä‘Æ°á»ng tháº³ng Ä‘Ã³.</p>
                        <div class="math-highlight-box">
                          $a$ vÃ  $b$ chÃ©o nhau $\\iff \\text{KhÃ´ng tá»“n táº¡i máº·t pháº³ng } (\\alpha) \\text{ chá»©a cáº£ } a \\text{ vÃ  } b$
                        </div>
                        <p><strong>TÃ­nh cháº¥t nháº­n biáº¿t quan trá»ng:</strong></p>
                        <ul>
                          <li>Hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau thÃ¬ <strong>khÃ´ng bao giá» cáº¯t nhau</strong> (khÃ´ng cÃ³ Ä‘iá»ƒm chung).</li>
                          <li>Hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau thÃ¬ <strong>khÃ´ng song song</strong> vá»›i nhau.</li>
                        </ul>
                      </div>
                    `,
                    workedExample: {
                      title: "VÃ­ dá»¥ 2: Nháº­n biáº¿t hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau trong tá»© diá»‡n",
                      problem: "Cho tá»© diá»‡n $ABCD$. Chá»©ng minh ráº±ng hai Ä‘Æ°á»ng tháº³ng $AB$ vÃ  $CD$ lÃ  hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau.",
                      solution: `
                        <p>Giáº£ sá»­ pháº£n chá»©ng $AB$ vÃ  $CD$ khÃ´ng chÃ©o nhau, nghÄ©a lÃ  tá»“n táº¡i má»™t máº·t pháº³ng $(\\alpha)$ chá»©a cáº£ $AB$ vÃ  $CD$.</p>
                        <p>Khi Ä‘Ã³ cáº£ bá»‘n Ä‘iá»ƒm $A, B, C, D$ Ä‘á»u cÃ¹ng thuá»™c máº·t pháº³ng $(\\alpha)$, mÃ¢u thuáº«n vá»›i giáº£ thiáº¿t $ABCD$ lÃ  má»™t tá»© diá»‡n (bá»‘n Ä‘iá»ƒm khÃ´ng Ä‘á»“ng pháº³ng).</p>
                        <p>Váº­y $AB$ vÃ  $CD$ lÃ  hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau. <em>(TÆ°Æ¡ng tá»±: $AC$ vÃ  $BD$ chÃ©o nhau; $AD$ vÃ  $BC$ chÃ©o nhau).</em></p>
                      `
                    },
                    teacherTip: "Báº£ng phÃ¢n biá»‡t vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i trong khÃ´ng gian cá»§a Tháº§y SÃ¡ng: <br>â€¢ CÃ³ Ä‘iá»ƒm chung: 1 Ä‘iá»ƒm chung $\\rightarrow$ Cáº¯t nhau; VÃ´ sá»‘ Ä‘iá»ƒm chung $\\rightarrow$ TrÃ¹ng nhau.<br>â€¢ KhÃ´ng cÃ³ Ä‘iá»ƒm chung: Äá»“ng pháº³ng $\\rightarrow$ Song song; KhÃ´ng Ä‘á»“ng pháº³ng $\\rightarrow$ ChÃ©o nhau!"
                  }
                ]
              },
              {
                id: "11-c4-b11-s2",
                num: "2",
                title: "TÃ­nh cháº¥t cá»§a hai Ä‘Æ°á»ng tháº³ng song song",
                subsections: [
                  {
                    key: "a",
                    title: "TÃ­nh cháº¥t duy nháº¥t vÃ  TÃ­nh cháº¥t báº¯c cáº§u",
                    summary: "Qua Ä‘iá»ƒm ngoÃ i Ä‘Æ°á»ng tháº³ng cÃ³ duy nháº¥t má»™t Ä‘Æ°á»ng song song; tÃ­nh cháº¥t báº¯c cáº§u: a // c vÃ  b // c => a // b.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec2a.mp3",
                      duration: 26,
                      coreSummary: "Má»¥c 2a: TÃ­nh cháº¥t hai Ä‘Æ°á»ng tháº³ng song song: Trong khÃ´ng gian, qua má»™t Ä‘iá»ƒm náº±m ngoÃ i Ä‘Æ°á»ng tháº³ng cho trÆ°á»›c, cÃ³ má»™t vÃ  chá»‰ má»™t Ä‘Æ°á»ng tháº³ng song song vá»›i Ä‘Æ°á»ng Ä‘Ã£ cho. Hai Ä‘Æ°á»ng tháº³ng phÃ¢n biá»‡t cÃ¹ng song song vá»›i Ä‘Æ°á»ng tháº³ng thá»© ba thÃ¬ song song vá»›i nhau: a song song c vÃ  b song song c suy ra a song song b."
                    },
                    contentHtml: `
                      <div class="theorem-card">
                        <div class="theorem-badge"><i class="fa-solid fa-fingerprint"></i> Äá»‹nh lÃ½ 1: TÃ­nh duy nháº¥t</div>
                        <p>Trong khÃ´ng gian, qua má»™t Ä‘iá»ƒm khÃ´ng thuá»™c má»™t Ä‘Æ°á»ng tháº³ng cho trÆ°á»›c, cÃ³ <strong>má»™t vÃ  chá»‰ má»™t</strong> Ä‘Æ°á»ng tháº³ng song song vá»›i Ä‘Æ°á»ng tháº³ng Ä‘Ã£ cho.</p>
                      </div>

                      <div class="theorem-card" style="margin-top: 14px;">
                        <div class="theorem-badge"><i class="fa-solid fa-link"></i> Äá»‹nh lÃ½ 2: TÃ­nh cháº¥t báº¯c cáº§u</div>
                        <p>Trong khÃ´ng gian, hai Ä‘Æ°á»ng tháº³ng phÃ¢n biá»‡t cÃ¹ng song song vá»›i má»™t Ä‘Æ°á»ng tháº³ng thá»© ba thÃ¬ song song vá»›i nhau:</p>
                        <div class="math-highlight-box">
                          $\\begin{cases} a // c \\\\ b // c \\\\ a \\neq b \\end{cases} \\implies a // b$
                        </div>
                      </div>
                    `,
                    workedExample: {
                      title: "VÃ­ dá»¥ 3: á»¨ng dá»¥ng tÃ­nh cháº¥t báº¯c cáº§u chá»©ng minh song song",
                      problem: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Gá»i $M, N$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a $SA$ vÃ  $SB$. Chá»©ng minh ráº±ng $MN // CD$.",
                      solution: `
                        <p>XÃ©t tam giÃ¡c $SAB$, ta cÃ³ $M$ lÃ  trung Ä‘iá»ƒm cá»§a $SA$, $N$ lÃ  trung Ä‘iá»ƒm cá»§a $SB$.</p>
                        <p>Do Ä‘Ã³ $MN$ lÃ  Ä‘Æ°á»ng trung bÃ¬nh cá»§a tam giÃ¡c $SAB$, suy ra: $MN // AB$ (1).</p>
                        <p>Láº¡i cÃ³ tá»© giÃ¡c $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn: $AB // CD$ (2).</p>
                        <p>Tá»« (1) vÃ  (2), theo tÃ­nh cháº¥t báº¯c cáº§u ta suy ra: $MN // CD$ (Ä‘iá»u pháº£i chá»©ng minh).</p>
                      `
                    }
                  },
                  {
                    key: "b",
                    title: "Äá»‹nh lÃ½ giao tuyáº¿n cá»§a ba máº·t pháº³ng & PhÆ°Æ¡ng phÃ¡p chá»©ng minh song song",
                    summary: "Ba máº·t pháº³ng cáº¯t nhau theo 3 giao tuyáº¿n thÃ¬ Ä‘Ã´i má»™t song song hoáº·c Ä‘á»“ng quy. Há»‡ quáº£ tÃ¬m giao tuyáº¿n song song.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec2b.mp3",
                      duration: 30,
                      coreSummary: "Má»¥c 2b: Äá»‹nh lÃ½ giao tuyáº¿n cá»§a ba máº·t pháº³ng: Náº¿u ba máº·t pháº³ng Ä‘Ã´i má»™t cáº¯t nhau theo ba giao tuyáº¿n phÃ¢n biá»‡t, thÃ¬ ba giao tuyáº¿n Ä‘Ã³ hoáº·c Ä‘Ã´i má»™t song song, hoáº·c Ä‘á»“ng quy táº¡i má»™t Ä‘iá»ƒm. Há»‡ quáº£: Khi hai máº·t pháº³ng láº§n lÆ°á»£t chá»©a hai Ä‘Æ°á»ng tháº³ng song song, giao tuyáº¿n cá»§a chÃºng náº¿u cÃ³ cháº¯c cháº¯n pháº£i song song vá»›i hai Ä‘Æ°á»ng tháº³ng áº¥y."
                    },
                    contentHtml: `
                      <div class="theorem-card">
                        <div class="theorem-badge"><i class="fa-solid fa-diagram-project"></i> Äá»‹nh lÃ½ 3: Äá»‹nh lÃ½ vá» ba giao tuyáº¿n</div>
                        <p>Náº¿u ba máº·t pháº³ng Ä‘Ã´i má»™t cáº¯t nhau theo ba giao tuyáº¿n phÃ¢n biá»‡t, thÃ¬ ba giao tuyáº¿n Ä‘Ã³ hoáº·c <strong>Ä‘Ã´i má»™t song song</strong>, hoáº·c <strong>Ä‘á»“ng quy</strong> táº¡i má»™t Ä‘iá»ƒm.</p>
                        <div class="math-highlight-box">
                          $\\begin{cases} (\\alpha) \\cap (\\beta) = d_1 \\\\ (\\beta) \\cap (\\gamma) = d_2 \\\\ (\\gamma) \\cap (\\alpha) = d_3 \\end{cases} \\implies \\begin{cases} d_1 // d_2 // d_3 \\quad \\text{hoáº·c} \\\\ d_1, d_2, d_3 \\text{ Ä‘á»“ng quy táº¡i } I \\end{cases}$
                        </div>
                      </div>

                      <div class="theorem-card" style="margin-top: 14px;">
                        <div class="theorem-badge"><i class="fa-solid fa-crown"></i> Há»‡ quáº£ vÃ ng: TÃ¬m giao tuyáº¿n song song</div>
                        <p>Náº¿u hai máº·t pháº³ng phÃ¢n biá»‡t láº§n lÆ°á»£t chá»©a hai Ä‘Æ°á»ng tháº³ng song song thÃ¬ giao tuyáº¿n cá»§a chÃºng (náº¿u cÃ³) cÅ©ng song song vá»›i hai Ä‘Æ°á»ng tháº³ng Ä‘Ã³ (hoáº·c trÃ¹ng vá»›i má»™t trong hai Ä‘Æ°á»ng):</p>
                        <div class="math-highlight-box">
                          $\\begin{cases} a \\subset (\\alpha), \\; b \\subset (\\beta) \\\\ a // b \\\\ (\\alpha) \\cap (\\beta) = d \\end{cases} \\implies d // a // b$
                        </div>
                      </div>
                    `,
                    workedExample: {
                      title: "VÃ­ dá»¥ 4: TÃ¬m giao tuyáº¿n cá»§a hai máº·t pháº³ng chá»©a hai Ä‘Æ°á»ng song song",
                      problem: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh thang vá»›i Ä‘Ã¡y lá»›n $AB$ vÃ  Ä‘Ã¡y nhá» $CD$ ($AB // CD$). TÃ¬m giao tuyáº¿n cá»§a hai máº·t pháº³ng $(SAB)$ vÃ  $(SCD)$.",
                      solution: `
                        <p>Ta cÃ³:</p>
                        <p>- Äiá»ƒm chung: $S \\in (SAB) \\cap (SCD)$.</p>
                        <p>- Hai Ä‘Æ°á»ng tháº³ng song song náº±m trong hai máº·t pháº³ng: $AB \\subset (SAB)$ vÃ  $CD \\subset (SCD)$ vá»›i $AB // CD$.</p>
                        <p>Ãp dá»¥ng há»‡ quáº£ cá»§a Ä‘á»‹nh lÃ½ ba giao tuyáº¿n, giao tuyáº¿n cá»§a $(SAB)$ vÃ  $(SCD)$ lÃ  Ä‘Æ°á»ng tháº³ng $d$ Ä‘i qua $S$ vÃ  song song vá»›i $AB, CD$ ($d // AB // CD$).</p>
                      `
                    },
                    teacherTip: "Chiáº¿n thuáº­t cá»§a Tháº§y SÃ¡ng: Muá»‘n tÃ¬m giao tuyáº¿n cá»§a 2 máº·t pháº³ng chá»©a 2 Ä‘Æ°á»ng tháº³ng song song: TÃ¬m 1 Ä‘iá»ƒm chung, rá»“i tá»« Ä‘iá»ƒm chung Ä‘Ã³ káº» má»™t Ä‘Æ°á»ng tháº³ng cháº¡y song song vá»›i 2 Ä‘Æ°á»ng tháº³ng áº¥y lÃ  xong ngay!"
                  }
                ]
              }
            ],
            practiceQuestions: [
              {
                id: "q-11-11-1",
                difficulty: "nb",
                difficultyLabel: "Má»©c 1: Nháº­n biáº¿t",
                hasDynamicVariation: true,
                prompt: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Cáº·p Ä‘Æ°á»ng tháº³ng nÃ o sau Ä‘Ã¢y lÃ  <strong>hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau</strong>?",
                options: [
                  "A. $SA$ vÃ  $CD$",
                  "B. $AB$ vÃ  $CD$",
                  "C. $SA$ vÃ  $AB$",
                  "D. $AC$ vÃ  $BD$"
                ],
                correctIndex: 0,
                explanation: "Hai Ä‘Æ°á»ng tháº³ng $SA$ vÃ  $CD$ khÃ´ng cÃ¹ng náº±m trong báº¥t ká»³ máº·t pháº³ng nÃ o vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung, do Ä‘Ã³ chÃºng lÃ  hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau."
              },
              {
                id: "q-11-11-2",
                difficulty: "th",
                difficultyLabel: "Má»©c 2: ThÃ´ng hiá»ƒu",
                hasDynamicVariation: true,
                prompt: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Gá»i $M, N$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a $SA$ vÃ  $SB$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  <strong>ÄÃšNG</strong>?",
                options: [
                  "A. $MN // CD$",
                  "B. $MN$ cáº¯t $CD$",
                  "C. $MN$ vÃ  $CD$ chÃ©o nhau",
                  "D. $MN // SC$"
                ],
                correctIndex: 0,
                explanation: "VÃ¬ $MN$ lÃ  Ä‘Æ°á»ng trung bÃ¬nh cá»§a tam giÃ¡c $SAB$ nÃªn $MN // AB$. Láº¡i cÃ³ $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn $AB // CD$. Theo tÃ­nh cháº¥t báº¯c cáº§u: $MN // CD$."
              },
              {
                id: "q-11-11-3",
                difficulty: "vd",
                difficultyLabel: "Má»©c 3: Váº­n dá»¥ng",
                hasDynamicVariation: true,
                prompt: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh thang vá»›i hai Ä‘Ã¡y $AB$ vÃ  $CD$ ($AB // CD, AB > CD$). Giao tuyáº¿n cá»§a hai máº·t pháº³ng $(SAB)$ vÃ  $(SCD)$ lÃ :",
                options: [
                  "A. ÄÆ°á»ng tháº³ng qua $S$ vÃ  song song vá»›i $AB, CD$",
                  "B. ÄÆ°á»ng tháº³ng ná»‘i $S$ vá»›i giao Ä‘iá»ƒm cá»§a $AD$ vÃ  $BC$",
                  "C. ÄÆ°á»ng tháº³ng qua $S$ vÃ  cáº¯t cáº¡nh Ä‘Ã¡y $AB$",
                  "D. Äoáº¡n tháº³ng $SO$ vá»›i $O$ lÃ  giao Ä‘iá»ƒm cá»§a $AC$ vÃ  $BD$"
                ],
                correctIndex: 0,
                explanation: "Hai máº·t pháº³ng $(SAB)$ vÃ  $(SCD)$ cÃ³ Ä‘iá»ƒm chung $S$ vÃ  láº§n lÆ°á»£t chá»©a hai Ä‘Æ°á»ng tháº³ng song song $AB // CD$. Theo há»‡ quáº£ Ä‘á»‹nh lÃ½ ba giao tuyáº¿n, giao tuyáº¿n cá»§a chÃºng lÃ  Ä‘Æ°á»ng tháº³ng qua $S$ vÃ  song song vá»›i $AB, CD$."
              },
              {
                id: "q-11-11-4",
                difficulty: "vdc",
                difficultyLabel: "Má»©c 4: Váº­n dá»¥ng cao",
                hasDynamicVariation: true,
                prompt: "Cho tá»© diá»‡n $ABCD$ cÃ³ cáº·p cáº¡nh Ä‘á»‘i diá»‡n $AB = 8\\text{ cm}$ vÃ  $CD = 6\\text{ cm}$. Máº·t pháº³ng $(\\alpha)$ song song vá»›i cáº£ $AB$ vÃ  $CD$, cáº¯t cÃ¡c cáº¡nh $BC, BD, AD, AC$ láº§n lÆ°á»£t táº¡i bá»‘n Ä‘iá»ƒm $M, N, P, Q$. Thiáº¿t diá»‡n $MNPQ$ lÃ  hÃ¬nh gÃ¬ vÃ  chu vi cá»§a thiáº¿t diá»‡n Ä‘Ã³ báº±ng bao nhiÃªu?",
                options: [
                  "A. HÃ¬nh bÃ¬nh hÃ nh, chu vi báº±ng $14\\text{ cm}$",
                  "B. HÃ¬nh chá»¯ nháº­t, chu vi báº±ng $18\\text{ cm}$",
                  "C. HÃ¬nh thang cÃ¢n, chu vi báº±ng $28\\text{ cm}$",
                  "D. HÃ¬nh thoi, chu vi báº±ng $16\\text{ cm}$"
                ],
                correctIndex: 0,
                explanation: "VÃ¬ $(\\alpha) // AB$ nÃªn $MN // AB // PQ \\Rightarrow MN // PQ$. VÃ¬ $(\\alpha) // CD$ nÃªn $MQ // CD // NP \\Rightarrow MQ // NP$. Do Ä‘Ã³ tá»© giÃ¡c $MNPQ$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Theo Ä‘á»‹nh lÃ½ Ta-lÃ©t: $MN = \\frac{CM}{CB} \\cdot AB$ vÃ  $MQ = \\frac{BM}{BC} \\cdot CD$. Chu vi thiáº¿t diá»‡n báº±ng $2(MN + MQ) = AB + CD = 8 + 6 = 14\\text{ cm}$ (luÃ´n khÃ´ng Ä‘á»•i vá»›i má»i vá»‹ trÃ­ cá»§a máº·t pháº³ng $(\\alpha)$!)."
              }
            ],
            realworldWrapup: {
              title: "QUAY Vá»€ GIáº¢I QUYáº¾T BÃ€I TOÃN TÃŒNH HUá»NG Má»ž Äáº¦U: CÃ‚Y Cáº¦U Sáº®T VÃ€ ÄÆ¯á»œNG RAY",
              recap: "Táº¡i sao hai thanh ray tÃ u há»a khÃ´ng cáº¯t nhau thÃ¬ song song, cÃ²n thanh ray vá»›i dÃ¢y cÃ¡p Ä‘iá»‡n trÃªn cao khÃ´ng cáº¯t nhau láº¡i chÃ©o nhau?",
              solution: `
                <p><strong>Lá»i giáº£i thÃ­ch khoa há»c cá»§a Tháº§y SÃ¡ng:</strong></p>
                <ol>
                  <li><strong>Äá»‘i vá»›i hai thanh ray tÃ u há»a:</strong> ChÃºng Ä‘Æ°á»£c cá»‘ Ä‘á»‹nh trÃªn cÃ¹ng má»™t máº·t pháº³ng tÃ -váº¹t vÃ  máº·t Ä‘áº¥t $(P)$. VÃ¬ chÃºng cÃ¹ng thuá»™c má»™t máº·t pháº³ng vÃ  khoáº£ng cÃ¡ch giá»¯a hai thanh ray luÃ´n báº±ng $1\\text{ m}$ hoáº·c $1{,}435\\text{ m}$ (khÃ´ng bao giá» cÃ³ Ä‘iá»ƒm chung) nÃªn theo Ä‘á»‹nh nghÄ©a: <strong>Hai thanh ray lÃ  hai Ä‘Æ°á»ng tháº³ng song song</strong>.</li>
                  <li><strong>Äá»‘i vá»›i thanh ray vÃ  Ä‘Æ°á»ng dÃ¢y cÃ¡p Ä‘iá»‡n trÃªn khÃ´ng (hoáº·c thanh giÃ n cáº§u táº§ng trÃªn):</strong> Thanh ray náº±m á»Ÿ máº·t pháº³ng sÃ n Ä‘áº¥t $(P)$, cÃ²n dÃ¢y cÃ¡p Ä‘iá»‡n cháº¡y trÃªn cÃ¡c cá»™t trá»¥ cao á»Ÿ má»™t máº·t pháº³ng khÃ´ng gian khÃ¡c lá»‡ch phÆ°Æ¡ng. KhÃ´ng thá»ƒ tÃ¬m Ä‘Æ°á»£c báº¥t ká»³ má»™t máº·t pháº³ng nÃ o cÃ³ thá»ƒ chá»©a Ä‘Æ°á»£c Ä‘á»“ng thá»i cáº£ thanh ray vÃ  dÃ¢y cÃ¡p Ä‘iá»‡n. DÃ¹ kÃ©o dÃ i vÃ´ táº­n chÃºng cÅ©ng khÃ´ng bao giá» gáº·p nhau, nhÆ°ng chÃºng <strong>khÃ´ng song song mÃ  lÃ  hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau</strong>.</li>
                </ol>
                <p><em>á»¨ng dá»¥ng ká»¹ thuáº­t:</em> Trong thiáº¿t káº¿ cáº§u vÆ°á»£t nhiá»u táº§ng vÃ  giÃ n khÃ´ng gian chá»‹u lá»±c (Space Truss), cÃ¡c ká»¹ sÆ° pháº£i tÃ­nh toÃ¡n chÃ­nh xÃ¡c cÃ¡c thanh giáº±ng song song Ä‘á»ƒ truyá»n táº£i trá»ng phÃ¢n bá»‘ Ä‘á»u, vÃ  cÃ¡c thanh giáº±ng chÃ©o nhau Ä‘á»ƒ chá»‘ng xoáº¯n váº·n giÃ³ bÃ£o, táº¡o nÃªn nhá»¯ng cÃ´ng trÃ¬nh tháº¿ ká»· vá»¯ng chÃ£i vÃ  an toÃ n tuyá»‡t Ä‘á»‘i!</p>
              `,
              audioUrl: "assets/audio/b11_11_wrapup.mp3",
              audioScript: "NhÆ° váº­y Tháº§y trÃ² mÃ¬nh Ä‘Ã£ giáº£i quyáº¿t trá»n váº¹n cÃ¢u há»i má»Ÿ Ä‘áº§u vá» cÃ¢y cáº§u sáº¯t vÃ  Ä‘Æ°á»ng ray. Hai thanh ray tÃ u há»a cÃ¹ng náº±m trÃªn máº·t tÃ  váº¹t vÃ  khÃ´ng cáº¯t nhau nÃªn chÃºng song song. CÃ²n thanh ray vá»›i dÃ¢y cÃ¡p Ä‘iá»‡n trÃªn cao náº±m á»Ÿ hai máº·t pháº³ng lá»‡ch nhau nÃªn chÃºng lÃ  hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau. Hiá»ƒu rÃµ Ä‘iá»u nÃ y giÃºp cÃ¡c ká»¹ sÆ° thiáº¿t káº¿ cÃ¡c táº§ng giÃ n cáº§u vÆ°á»£t chá»‹u lá»±c an toÃ n vÃ  chÃ­nh xÃ¡c tuyá»‡t Ä‘á»‘i. CÃ¡c em hÃ£y tiáº¿p tá»¥c lÃ m bÃ i táº­p luyá»‡n táº­p thÃ­ch á»©ng bÃªn dÆ°á»›i Ä‘á»ƒ tÃ­ch luá»¹ Ä‘iá»ƒm thÆ°á»Ÿng nhÃ©!"
            }
          },
          {
            id: "11-c4-b12",
            number: "BÃ i 12",
            title: "ÄÆ°á»ng tháº³ng vÃ  máº·t pháº³ng song song",
            isFeaturedLesson: true,
            teacherWelcome: {
              greetingText: "Tháº§y SÃ¡ng xin chÃ o táº¥t cáº£ cÃ¡c em há»c sinh lá»›p 11 yÃªu quÃ½! Khi bÆ°á»›c vÃ o mÃ´n HÃ¬nh há»c khÃ´ng gian, nhiá»u báº¡n thÆ°á»ng cáº£m tháº¥y bá»¡ ngá»¡ vÃ¬ pháº£i rÃ¨n luyá»‡n trÃ­ tÆ°á»Ÿng tÆ°á»£ng hÃ¬nh há»c ba chiá»u. NhÆ°ng cÃ¡c em Ä‘á»«ng lo láº¯ng, Tháº§y SÃ¡ng sáº½ Ä‘á»“ng hÃ nh vÃ  giÃºp cÃ¡c em lÃ m chá»§ tá»«ng quy táº¯c má»™t cÃ¡ch trá»±c quan, dá»… hiá»ƒu nháº¥t. BÃ i 12 hÃ´m nay, 'ÄÆ°á»ng tháº³ng vÃ  máº·t pháº³ng song song', lÃ  bÃ i há»c báº£n lá» quan trá»ng báº­c nháº¥t cá»§a há»c ká»³ 1. TrÆ°á»›c khi há»c, cÃ¡c em hÃ£y cÃ¹ng Tháº§y Ä‘iá»ƒm qua cÃ¡c má»¥c tiÃªu cá»‘t lÃµi: Thá»© nháº¥t, nháº­n biáº¿t vÃ  phÃ¢n biá»‡t chÃ­nh xÃ¡c 3 vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng. Thá»© hai, náº¯m vá»¯ng Äá»‹nh lÃ­ 1 â€“ chÃ¬a khÃ³a vÃ ng Ä‘á»ƒ chá»©ng minh Ä‘Æ°á»ng tháº³ng song song vá»›i máº·t pháº³ng. Thá»© ba, váº­n dá»¥ng linh hoáº¡t Äá»‹nh lÃ­ 2 vá» giao tuyáº¿n song song Ä‘á»ƒ giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n thiáº¿t diá»‡n trong cÃ¡c Ä‘á» thi. Tháº§y tin ráº±ng vá»›i sá»± táº­p trung vÃ  tinh tháº§n há»c há»i chá»§ Ä‘á»™ng, cÃ¡c em sáº½ há»c tháº­t vui vÃ  Ä‘áº¡t Ä‘iá»ƒm sá»‘ tháº­t cao. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng báº¯t Ä‘áº§u tiáº¿t há»c nhÃ©!",
              audioScript: "Tháº§y SÃ¡ng xin chÃ o táº¥t cáº£ cÃ¡c em há»c sinh lá»›p 11 yÃªu quÃ½! Khi bÆ°á»›c vÃ o mÃ´n HÃ¬nh há»c khÃ´ng gian, nhiá»u báº¡n thÆ°á»ng cáº£m tháº¥y bá»¡ ngá»¡ vÃ¬ pháº£i rÃ¨n luyá»‡n trÃ­ tÆ°á»Ÿng tÆ°á»£ng hÃ¬nh há»c ba chiá»u. NhÆ°ng cÃ¡c em Ä‘á»«ng lo láº¯ng, Tháº§y SÃ¡ng sáº½ Ä‘á»“ng hÃ nh vÃ  giÃºp cÃ¡c em lÃ m chá»§ tá»«ng quy táº¯c má»™t cÃ¡ch trá»±c quan, dá»… hiá»ƒu nháº¥t. BÃ i 12 hÃ´m nay, ÄÆ°á»ng tháº³ng vÃ  máº·t pháº³ng song song, lÃ  bÃ i há»c báº£n lá» quan trá»ng báº­c nháº¥t cá»§a há»c ká»³ 1. TrÆ°á»›c khi há»c, cÃ¡c em hÃ£y cÃ¹ng Tháº§y Ä‘iá»ƒm qua cÃ¡c má»¥c tiÃªu cá»‘t lÃµi. Thá»© nháº¥t, nháº­n biáº¿t vÃ  phÃ¢n biá»‡t chÃ­nh xÃ¡c 3 vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng. Thá»© hai, náº¯m vá»¯ng Äá»‹nh lÃ­ 1 â€“ chÃ¬a khÃ³a vÃ ng Ä‘á»ƒ chá»©ng minh Ä‘Æ°á»ng tháº³ng song song vá»›i máº·t pháº³ng. Thá»© ba, váº­n dá»¥ng linh hoáº¡t Äá»‹nh lÃ­ 2 vá» giao tuyáº¿n song song Ä‘á»ƒ giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n thiáº¿t diá»‡n trong cÃ¡c Ä‘á» thi. Tháº§y tin ráº±ng vá»›i sá»± táº­p trung vÃ  tinh tháº§n há»c há»i chá»§ Ä‘á»™ng, cÃ¡c em sáº½ há»c tháº­t vui vÃ  Ä‘áº¡t Ä‘iá»ƒm sá»‘ tháº­t cao. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng báº¯t Ä‘áº§u tiáº¿t há»c nhÃ©!",
              audioUrl: "assets/audio/b12_welcome.mp3"
            },
            learningGoals: [
              "Nháº­n biáº¿t vÃ  phÃ¢n biá»‡t chÃ­nh xÃ¡c 3 vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng trong khÃ´ng gian.",
              "Náº¯m vá»¯ng Äá»‹nh lÃ­ 1 vÃ  lÃ m chá»§ phÆ°Æ¡ng phÃ¡p chá»©ng minh Ä‘Æ°á»ng tháº³ng song song vá»›i máº·t pháº³ng (ká»¹ nÄƒng cá»‘t lÃµi hÃ¬nh 11).",
              "Váº­n dá»¥ng Äá»‹nh lÃ­ 2 (Äá»‹nh lÃ­ giao tuyáº¿n) vÃ  há»‡ quáº£ Ä‘á»ƒ dá»±ng thiáº¿t diá»‡n vÃ  tÃ¬m giao tuyáº¿n song song.",
              "LiÃªn há»‡ vÃ  giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n thá»±c tiá»…n vá» cáº¥u trÃºc song song trong Ä‘á»i sá»‘ng vÃ  ká»¹ thuáº­t xÃ¢y dá»±ng."
            ],
            hook: {
              title: "TÃ¬nh huá»‘ng thá»±c táº¿: Thiáº¿t káº¿ xÃ  gá»“ Ä‘á»¡ mÃ¡i vÃ  dáº§m cáº§u trá»¥c nhÃ  xÆ°á»Ÿng",
              story: "Trong cÃ¡c nhÃ  xÆ°á»Ÿng cÃ´ng nghiá»‡p táº¡i Thoáº¡i SÆ¡n, An Giang, cÃ¡c thanh xÃ  gá»“ thÃ©p chá»‹u lá»±c Ä‘Æ°á»£c láº¯p Ä‘áº·t trÃªn cao Ä‘á»ƒ Ä‘á»¡ mÃ¡i tÃ´n. ToÃ n bá»™ cÃ¡c thanh xÃ  gá»“ nÃ y luÃ´n giá»¯ khoáº£ng cÃ¡ch á»•n Ä‘á»‹nh vÃ  song song vá»›i máº·t ná»n nhÃ  xÆ°á»Ÿng rá»™ng hÃ ng ngÃ n mÃ©t vuÃ´ng.",
              question: "LÃ m tháº¿ nÃ o ngÆ°á»i ká»¹ sÆ° xÃ¢y dá»±ng cÃ³ thá»ƒ kháº³ng Ä‘á»‹nh thanh xÃ  gá»“ d song song vá»›i toÃ n bá»™ máº·t sÃ n (P) mÃ  khÃ´ng cáº§n pháº£i Ä‘o khoáº£ng cÃ¡ch tá»« vÃ´ sá»‘ Ä‘iá»ƒm trÃªn thanh xÃ  xuá»‘ng sÃ n?",
              teacherNote: "ÄÃ³ chÃ­nh lÃ  sá»©c máº¡nh cá»§a Äá»‹nh lÃ­ 1 trong bÃ i há»c hÃ´m nay: Chá»‰ cáº§n tÃ¬m tháº¥y má»™t Ä‘Æ°á»ng tháº³ng d' trÃªn sÃ n song song vá»›i xÃ  gá»“ d, ta cÃ³ thá»ƒ káº¿t luáº­n cháº¯c cháº¯n 100% ráº±ng xÃ  gá»“ d song song vá»›i toÃ n bá»™ máº·t sÃ n!",
              illustration: "assets/images/lessons/hook_xa_go_mai_nha.svg",
              illustrationCaption: "CÃ¡c thanh xÃ  gá»“ Ä‘á»¡ mÃ¡i nhÃ  xÆ°á»Ÿng Ä‘Æ°á»£c Ä‘áº·t song song vá»›i máº·t sÃ n bÃª tÃ´ng."
            },
            teacherVoiceGeneral: {
              title: "Lá»i giáº£ng cá»§a Tháº§y SÃ¡ng: Giá»›i thiá»‡u ÄÆ°á»ng tháº³ng vÃ  máº·t pháº³ng song song",
              script: "Tháº§y SÃ¡ng xin chÃ o táº¥t cáº£ cÃ¡c em há»c sinh lá»›p 11 yÃªu quÃ½! Khi há»c hÃ¬nh há»c khÃ´ng gian, nhiá»u báº¡n thÆ°á»ng sá»£ vÃ¬ khÃ³ tÆ°á»Ÿng tÆ°á»£ng hÃ¬nh váº½ ba chiá»u trÃªn máº·t giáº¥y pháº³ng. NhÆ°ng hÃ´m nay, Tháº§y SÃ¡ng sáº½ táº·ng cÃ¡c em má»™t cÃ´ng thá»©c tÆ° duy vÃ´ cÃ¹ng Ä‘Æ¡n giáº£n vÃ  hiá»‡u quáº£. CÃ¡c em hÃ£y nhá»› lá»i Tháº§y dáº·n: Má»™t Ä‘Æ°á»ng tháº³ng muá»‘n song song vá»›i má»™t máº·t pháº³ng, nÃ³ khÃ´ng cáº§n pháº£i quen biáº¿t toÃ n bá»™ máº·t pháº³ng Ä‘Ã³. NÃ³ chá»‰ cáº§n tÃ¬m Ä‘Æ°á»£c má»™t ngÆ°á»i báº¡n thÃ¢n náº±m sáºµn trong máº·t pháº³ng, vÃ  song song vá»›i ngÆ°á»i báº¡n áº¥y! Chá»‰ má»™t Ä‘á»‹nh lÃ­ ngáº¯n gá»n áº¥y thÃ´i sáº½ giÃºp cÃ¡c em giáº£i quyáº¿t Ä‘áº¿n 80 pháº§n trÄƒm cÃ¡c bÃ i toÃ¡n chá»©ng minh song song trong cÃ¡c Ä‘á» thi há»c kÃ¬ vÃ  thi thá»­. NÃ o, cÃ¡c em hÃ£y cÃ¹ng Tháº§y báº¯t Ä‘áº§u bÃ i há»c nhÃ©!",
              audioUrl: "assets/audio/b12_main_lecture.mp3"
            },
            sections: [
              {
                id: "11-c4-b12-s1",
                num: "1",
                title: "1. Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng",
                subsections: [
                  {
                    key: "a",
                    title: "Ba vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng",
                    summary: "ÄÆ°á»ng tháº³ng vÃ  máº·t pháº³ng cÃ³ thá»ƒ song song (0 Ä‘iá»ƒm chung), cáº¯t nhau (1 Ä‘iá»ƒm chung) hoáº·c Ä‘Æ°á»ng tháº³ng náº±m trong máº·t pháº³ng (vÃ´ sá»‘ Ä‘iá»ƒm chung).",
                    illustration: "assets/images/lessons/hinh1_vi_tri_tuong_doi_11.svg",
                    illustrationCaption: "Ba vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i: Song song (0 Ä‘iá»ƒm chung), Cáº¯t nhau (1 Ä‘iá»ƒm chung M), Náº±m trong (vÃ´ sá»‘ Ä‘iá»ƒm chung).",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-shapes"></i> 3 Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i</div>
                          <p>Cho Ä‘Æ°á»ng tháº³ng $d$ vÃ  máº·t pháº³ng $(\\alpha)$. Ta cÃ³ Ä‘Ãºng ba kháº£ nÄƒng sau:</p>
                          <ol>
                            <li><strong>$d$ song song vá»›i $(\\alpha)$</strong> (kÃ½ hiá»‡u $d // (\\alpha)$): $d$ vÃ  $(\\alpha)$ khÃ´ng cÃ³ Ä‘iá»ƒm chung nÃ o:
                            $d \\cap (\\alpha) = \\emptyset$</li>
                            <li><strong>$d$ cáº¯t $(\\alpha)$</strong> táº¡i Ä‘iá»ƒm $M$ (kÃ½ hiá»‡u $d \\cap (\\alpha) = \\{M\\}$): $d$ vÃ  $(\\alpha)$ cÃ³ Ä‘Ãºng má»™t Ä‘iá»ƒm chung duy nháº¥t.</li>
                            <li><strong>$d$ náº±m trong $(\\alpha)$</strong> (kÃ½ hiá»‡u $d \\subset (\\alpha)$): $d$ vÃ  $(\\alpha)$ cÃ³ tá»« 2 Ä‘iá»ƒm chung phÃ¢n biá»‡t trá»Ÿ lÃªn, do Ä‘Ã³ cÃ³ vÃ´ sá»‘ Ä‘iá»ƒm chung.</li>
                          </ol>
                        </div>
                      </div>
                    `,
                    teacherLecture: "CÃ¡c em hÃ£y Ä‘áº¿m sá»‘ Ä‘iá»ƒm chung: KhÃ´ng cÃ³ Ä‘iá»ƒm chung nÃ o lÃ  song song; ÄÃºng má»™t Ä‘iá»ƒm chung lÃ  cáº¯t nhau; CÃ²n náº¿u cÃ³ tá»« hai Ä‘iá»ƒm chung trá»Ÿ lÃªn thÃ¬ láº­p tá»©c Ä‘Æ°á»ng tháº³ng náº±m báº¹p dÃ­ trong máº·t pháº³ng luÃ´n! HÃ£y ghi nhá»› Ä‘iá»u nÃ y Ä‘á»ƒ lÃ m cÃ¡c cÃ¢u há»i lÃ½ thuyáº¿t tráº¯c nghiá»‡m nhÃ©.",
                    workedExample: {
                      title: "VÃ­ dá»¥ 1: Nháº­n biáº¿t vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i trong hÃ¬nh chÃ³p",
                      problem: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Gá»i $O$ lÃ  giao Ä‘iá»ƒm cá»§a $AC$ vÃ  $BD$. XÃ¡c Ä‘á»‹nh vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a cÃ¡c Ä‘Æ°á»ng tháº³ng $AB, SO, AC$ Ä‘á»‘i vá»›i máº·t pháº³ng $(SBD)$.",
                      thinking: "Xem xÃ©t cÃ¡c Ä‘iá»ƒm chung giá»¯a tá»«ng Ä‘Æ°á»ng tháº³ng vá»›i máº·t pháº³ng (SBD).",
                      solution: `
                        <p>1. XÃ©t Ä‘Æ°á»ng tháº³ng $SO$: VÃ¬ $S \\in (SBD)$ vÃ  $O \\in BD \\subset (SBD)$ nÃªn $SO \\subset (SBD)$ (Ä‘Æ°á»ng tháº³ng náº±m trong máº·t pháº³ng).</p>
                        <p>2. XÃ©t Ä‘Æ°á»ng tháº³ng $AC$: $AC \\cap (SBD) = \\{O\\}$ vÃ  $AC$ khÃ´ng náº±m trong $(SBD)$, do Ä‘Ã³ $AC$ cáº¯t máº·t pháº³ng $(SBD)$ táº¡i Ä‘iá»ƒm duy nháº¥t $O$.</p>
                        <p>3. XÃ©t Ä‘Æ°á»ng tháº³ng $AB$: Ta cÃ³ $AB \\cap (SBD) = \\{B\\}$ vÃ¬ $B$ lÃ  Ä‘á»‰nh chung. Do Ä‘Ã³ $AB$ cáº¯t máº·t pháº³ng $(SBD)$ táº¡i Ä‘iá»ƒm $B$.</p>
                      `,
                      teacherGuidance: "Äiá»ƒm máº¥u chá»‘t lÃ  tÃ¬m giao Ä‘iá»ƒm chung giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  cÃ¡c Ä‘Æ°á»ng tháº³ng náº±m trong máº·t pháº³ng. Náº¿u Ä‘iá»ƒm Ä‘Ã³ lÃ  duy nháº¥t thÃ¬ Ä‘Æ°á»ng tháº³ng cáº¯t máº·t pháº³ng.",
                      audioScript: "Trong vÃ­ dá»¥ 1, Ä‘Æ°á»ng tháº³ng S O cÃ³ cáº£ hai Ä‘iá»ƒm S vÃ  O thuá»™c máº·t pháº³ng S B D nÃªn S O náº±m trong máº·t pháº³ng S B D. ÄÆ°á»ng tháº³ng A C cáº¯t máº·t pháº³ng S B D táº¡i Ä‘iá»ƒm O, cÃ²n Ä‘Æ°á»ng tháº³ng A B cáº¯t máº·t pháº³ng S B D táº¡i Ä‘iá»ƒm B cÃ¡c em nhÃ©!"
                    }
                  }
                ]
              },
              {
                id: "11-c4-b12-s2",
                num: "2",
                title: "2. Dáº¥u hiá»‡u nháº­n biáº¿t Ä‘Æ°á»ng tháº³ng song song vá»›i máº·t pháº³ng (Äá»‹nh lÃ­ 1)",
                subsections: [
                  {
                    key: "a",
                    title: "Ná»™i dung Äá»‹nh lÃ­ 1 & PhÆ°Æ¡ng phÃ¡p chá»©ng minh",
                    summary: "Náº¿u Ä‘Æ°á»ng tháº³ng d khÃ´ng náº±m trong máº·t pháº³ng vÃ  song song vá»›i má»™t Ä‘Æ°á»ng tháº³ng náº±m trong máº·t pháº³ng thÃ¬ d song song vá»›i máº·t pháº³ng Ä‘Ã³.",
                    illustration: "assets/images/lessons/hinh2_dinh_li_1_nhan_biet_11.svg",
                    illustrationCaption: "Äá»‹nh lÃ­ 1: d khÃ´ng náº±m trong (alpha) vÃ  d // d' náº±m trong (alpha) suy ra d // (alpha); HÃ¬nh chÃ³p S.ABCD.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-star"></i> Äá»‹nh lÃ­ 1 (Dáº¥u hiá»‡u nháº­n biáº¿t cá»‘t lÃµi)</div>
                          <p>Náº¿u Ä‘Æ°á»ng tháº³ng $d$ khÃ´ng náº±m trong máº·t pháº³ng $(\\alpha)$ vÃ  song song vá»›i má»™t Ä‘Æ°á»ng tháº³ng $d'$ náº±m trong $(\\alpha)$ thÃ¬ $d$ song song vá»›i $(\\alpha)$.</p>
                          <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px 16px; margin: 10px 0; border-radius: 4px;">
                            $\\begin{cases} d \\not\\subset (\\alpha) \\\\ d' \\subset (\\alpha) \\\\ d // d' \\end{cases} \\implies d // (\\alpha)$
                          </div>
                        </div>
                        <div class="note-box">
                          <i class="fa-solid fa-pen-ruler"></i> <strong>SÆ¡ Ä‘á»“ 3 bÆ°á»›c chá»©ng minh $d // (\\alpha)$ cá»§a Tháº§y SÃ¡ng:</strong>
                          <p><strong>BÆ°á»›c 1:</strong> Kháº³ng Ä‘á»‹nh $d$ khÃ´ng náº±m trong $(\\alpha)$ ($d \\not\\subset (\\alpha)$).</p>
                          <p><strong>BÆ°á»›c 2:</strong> TÃ¬m má»™t Ä‘Æ°á»ng tháº³ng $d'$ náº±m trong $(\\alpha)$ ($d' \\subset (\\alpha)$).</p>
                          <p><strong>BÆ°á»›c 3:</strong> Chá»©ng minh $d // d'$ (sá»­ dá»¥ng Ä‘Æ°á»ng trung bÃ¬nh tam giÃ¡c, hÃ¬nh bÃ¬nh hÃ nh hoáº·c Ä‘á»‹nh lÃ­ Thales).</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Äá»‹nh lÃ­ 1 chÃ­nh lÃ  cÃ¢u tháº§n chÃº cá»§a hÃ¬nh há»c khÃ´ng gian 11: Äá»ƒ chá»©ng minh Ä‘Æ°á»ng song song vá»›i máº·t, ta Ä‘Æ°a vá» chá»©ng minh hai Ä‘Æ°á»ng tháº³ng song song trong hÃ¬nh há»c pháº³ng! TÃ¬m cho Tháº§y Ä‘Æ°á»ng tháº³ng d pháº©y náº±m sáºµn trong máº·t pháº³ng, chá»©ng minh d song song d pháº©y báº±ng Ä‘Æ°á»ng trung bÃ¬nh hay hÃ¬nh bÃ¬nh hÃ nh lÃ  xong!",
                    workedExample: {
                      title: "VÃ­ dá»¥ 2: Chá»©ng minh Ä‘Æ°á»ng tháº³ng song song vá»›i máº·t pháº³ng",
                      problem: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Gá»i $M, N$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a $SA$ vÃ  $SB$. Chá»©ng minh ráº±ng $MN // (ABCD)$ vÃ  $MN // (SCD)$.",
                      thinking: "MN lÃ  Ä‘Æ°á»ng trung bÃ¬nh cá»§a tam giÃ¡c SAB, suy ra MN song song vá»›i AB. Do AB náº±m trong (ABCD) nÃªn MN song song vá»›i (ABCD).",
                      solution: `
                        <p>1. <strong>Chá»©ng minh $MN // (ABCD)$</strong>:</p>
                        <ul>
                          <li>Trong tam giÃ¡c $SAB$, vÃ¬ $M, N$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a $SA, SB$ nÃªn $MN$ lÃ  Ä‘Æ°á»ng trung bÃ¬nh cá»§a tam giÃ¡c $SAB$.</li>
                          <li>Suy ra $MN // AB$.</li>
                          <li>Máº·t khÃ¡c $AB \\subset (ABCD)$ vÃ  $MN \\not\\subset (ABCD)$.</li>
                          <li>Theo Äá»‹nh lÃ­ 1: $MN // (ABCD)$.</li>
                        </ul>
                        <p>2. <strong>Chá»©ng minh $MN // (SCD)$</strong>:</p>
                        <ul>
                          <li>VÃ¬ $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn $AB // CD$.</li>
                          <li>Láº¡i cÃ³ $MN // AB$, suy ra $MN // CD$.</li>
                          <li>Máº·t khÃ¡c $CD \\subset (SCD)$ vÃ  $MN \\not\\subset (SCD)$.</li>
                          <li>Theo Äá»‹nh lÃ­ 1: $MN // (SCD)$.</li>
                        </ul>
                      `,
                      teacherGuidance: "CÃ¡c em pháº£i viáº¿t Ä‘á»§ 3 Ä‘iá»u kiá»‡n: MN khÃ´ng náº±m trong máº·t pháº³ng, Ä‘Æ°á»ng tháº³ng song song náº±m trong máº·t pháº³ng, vÃ  hai Ä‘Æ°á»ng song song nhau. Thiáº¿u Ä‘iá»u kiá»‡n d khÃ´ng náº±m trong máº·t pháº³ng sáº½ bá»‹ trá»« Ä‘iá»ƒm trÃ¬nh bÃ y!",
                      audioScript: "Trong vÃ­ dá»¥ 2, M N lÃ  Ä‘Æ°á»ng trung bÃ¬nh cá»§a tam giÃ¡c S A B nÃªn M N song song vá»›i A B. VÃ¬ A B náº±m trong máº·t Ä‘Ã¡y A B C D vÃ  M N khÃ´ng náº±m trong Ä‘Ã¡y, nÃªn theo Äá»‹nh lÃ­ má»™t, M N song song vá»›i máº·t pháº³ng A B C D. TÆ°Æ¡ng tá»±, M N cÅ©ng song song vá»›i C D nÃªn M N song song vá»›i máº·t pháº³ng S C D cÃ¡c em nhÃ©!"
                    }
                  }
                ]
              },
              {
                id: "11-c4-b12-s3",
                num: "3",
                title: "3. TÃ­nh cháº¥t cá»§a Ä‘Æ°á»ng tháº³ng song song vá»›i máº·t pháº³ng (Äá»‹nh lÃ­ 2)",
                subsections: [
                  {
                    key: "a",
                    title: "Äá»‹nh lÃ­ 2 (Äá»‹nh lÃ­ giao tuyáº¿n song song) & Há»‡ quáº£",
                    summary: "Máº·t pháº³ng chá»©a Ä‘Æ°á»ng tháº³ng song song cáº¯t máº·t pháº³ng kia theo giao tuyáº¿n song song vá»›i Ä‘Æ°á»ng tháº³ng Ä‘Ã³.",
                    illustration: "assets/images/lessons/hinh3_dinh_li_2_giao_tuyen_11.svg",
                    illustrationCaption: "Äá»‹nh lÃ­ 2: Máº·t pháº³ng (beta) chá»©a d // (alpha) cáº¯t (alpha) theo giao tuyáº¿n d' thÃ¬ d // d'.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-code-fork"></i> Äá»‹nh lÃ­ 2 (Giao tuyáº¿n song song)</div>
                          <p>Cho Ä‘Æ°á»ng tháº³ng $d$ song song vá»›i máº·t pháº³ng $(\\alpha)$. Náº¿u máº·t pháº³ng $(\\beta)$ chá»©a $d$ vÃ  cáº¯t $(\\alpha)$ theo giao tuyáº¿n $d'$ thÃ¬ $d'$ song song vá»›i $d$.</p>
                          <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 10px 15px; margin: 10px 0; border-radius: 4px;">
                            $\\begin{cases} d // (\\alpha) \\\\ d \\subset (\\beta) \\\\ (\\alpha) \\cap (\\beta) = d' \\end{cases} \\implies d // d'$
                          </div>
                        </div>
                        <div class="note-box">
                          <i class="fa-solid fa-lightbulb"></i> <strong>Há»‡ quáº£ quan trá»ng:</strong>
                          <p>Náº¿u hai máº·t pháº³ng phÃ¢n biá»‡t cÃ¹ng song song vá»›i má»™t Ä‘Æ°á»ng tháº³ng thÃ¬ giao tuyáº¿n cá»§a chÃºng (náº¿u cÃ³) cÅ©ng song song vá»›i Ä‘Æ°á»ng tháº³ng Ä‘Ã³.</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Äá»‹nh lÃ­ 2 cá»±c ká»³ lá»£i háº¡i khi lÃ m bÃ i toÃ¡n tÃ¬m giao tuyáº¿n vÃ  dá»±ng thiáº¿t diá»‡n cÃ¡c em nhÃ©! Khi hai máº·t pháº³ng chá»©a hai Ä‘Æ°á»ng tháº³ng song song, giao tuyáº¿n cá»§a chÃºng náº¿u cÃ³ cháº¯c cháº¯n pháº£i Ä‘i qua Ä‘iá»ƒm chung vÃ  cháº¡y song song vá»›i hai Ä‘Æ°á»ng tháº³ng áº¥y!",
                    workedExample: {
                      title: "VÃ­ dá»¥ 3: XÃ¡c Ä‘á»‹nh giao tuyáº¿n vÃ  thiáº¿t diá»‡n",
                      problem: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh thang ($AB // CD, AB > CD$). Gá»i $M$ lÃ  Ä‘iá»ƒm náº±m trÃªn cáº¡nh $SA$ ($M$ khÃ´ng trÃ¹ng vá»›i $S$ vÃ  $A$). Máº·t pháº³ng $(\\alpha)$ Ä‘i qua $M$ vÃ  song song vá»›i $AB, BC$. XÃ¡c Ä‘á»‹nh thiáº¿t diá»‡n cá»§a hÃ¬nh chÃ³p cáº¯t bá»Ÿi máº·t pháº³ng $(\\alpha)$.",
                      thinking: "Máº·t pháº³ng (alpha) chá»©a cÃ¡c Ä‘Æ°á»ng tháº³ng song song vá»›i AB vÃ  BC. Ãp dá»¥ng Ä‘á»‹nh lÃ­ 2 Ä‘á»ƒ káº» cÃ¡c giao tuyáº¿n song song qua cÃ¡c Ä‘á»‰nh.",
                      solution: `
                        <p>1. Trong máº·t pháº³ng $(SAB)$, qua $M$ káº» Ä‘Æ°á»ng tháº³ng song song vá»›i $AB$, cáº¯t $SB$ táº¡i $N$. VÃ¬ $(\\alpha) // AB$ nÃªn $MN$ lÃ  giao tuyáº¿n cá»§a $(\\alpha)$ vá»›i $(SAB)$.</p>
                        <p>2. Trong máº·t pháº³ng $(SBC)$, qua $N$ káº» Ä‘Æ°á»ng tháº³ng song song vá»›i $BC$, cáº¯t $SC$ táº¡i $P$. VÃ¬ $(\\alpha) // BC$ nÃªn $NP$ lÃ  giao tuyáº¿n cá»§a $(\\alpha)$ vá»›i $(SBC)$.</p>
                        <p>3. VÃ¬ $AB // CD$ nÃªn $(\\alpha) // CD$. Trong $(SCD)$, qua $P$ káº» Ä‘Æ°á»ng tháº³ng song song vá»›i $CD$, cáº¯t $SD$ táº¡i $Q$.</p>
                        <p>4. Ná»‘i $Q$ vá»›i $M$ trong máº·t pháº³ng $(SAD)$. Thiáº¿t diá»‡n cáº§n tÃ¬m lÃ  tá»© giÃ¡c $MNPQ$.</p>
                        <p>VÃ¬ $MN // AB$ vÃ  $PQ // CD // AB$ nÃªn $MN // PQ$. Váº­y thiáº¿t diá»‡n $MNPQ$ lÃ  má»™t hÃ¬nh thang.</p>
                      `,
                      teacherGuidance: "Khi bÃ i toÃ¡n cho máº·t pháº³ng song song vá»›i má»™t Ä‘Æ°á»ng tháº³ng, qua Ä‘iá»ƒm Ä‘Ã£ biáº¿t ta cá»© káº» Ä‘Æ°á»ng tháº³ng song song vá»›i Ä‘Æ°á»ng tháº³ng Ä‘Ã³ Ä‘á»ƒ tÃ¬m cÃ¡c Ä‘á»‰nh thiáº¿t diá»‡n tiáº¿p theo.",
                      audioScript: "Trong vÃ­ dá»¥ 3, Ã¡p dá»¥ng Äá»‹nh lÃ­ 2, qua Ä‘iá»ƒm M ta káº» Ä‘Æ°á»ng tháº³ng song song vá»›i A B cáº¯t S B táº¡i N; qua N káº» song song vá»›i B C cáº¯t S C táº¡i P; vÃ  qua P káº» song song vá»›i C D cáº¯t S D táº¡i Q. Thiáº¿t diá»‡n thu Ä‘Æ°á»£c chÃ­nh lÃ  hÃ¬nh thang M N P Q cÃ¡c em nhÃ©!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "Váº¬N Dá»¤NG THá»°C Táº¾: QUAY Láº I GIáº¢I QUYáº¾T BÃ€I TOÃN TÃŒNH HUá»NG Má»ž Äáº¦U",
              recap: "LÃ m tháº¿ nÃ o ngÆ°á»i ká»¹ sÆ° xÃ¢y dá»±ng cÃ³ thá»ƒ kháº³ng Ä‘á»‹nh thanh xÃ  gá»“ d song song vá»›i toÃ n bá»™ máº·t sÃ n (P) mÃ  khÃ´ng cáº§n pháº£i Ä‘o khoáº£ng cÃ¡ch tá»« vÃ´ sá»‘ Ä‘iá»ƒm trÃªn thanh xÃ  xuá»‘ng sÃ n?",
              illustration: "assets/images/lessons/wrapup_giai_quyet_xa_go_11.svg",
              illustrationCaption: "MÃ´ hÃ¬nh toÃ¡n há»c khÃ´ng gian chá»©ng minh xÃ  gá»“ mÃ¡i song song máº·t sÃ n bÃª tÃ´ng.",
              solution: `
                <p><strong>Lá»i giáº£i chi tiáº¿t & MÃ´ hÃ¬nh hÃ³a ToÃ¡n há»c cá»§a Tháº§y SÃ¡ng:</strong></p>
                <p>1. <strong>MÃ´ hÃ¬nh hÃ³a hÃ¬nh há»c:</strong> Xem máº·t ná»n bÃª tÃ´ng nhÃ  xÆ°á»Ÿng lÃ  máº·t pháº³ng $(P)$, vÃ  thanh xÃ  gá»“ thÃ©p trÃªn mÃ¡i nhÃ  lÃ  Ä‘Æ°á»ng tháº³ng $d$.</p>
                <p>2. <strong>Ãp dá»¥ng Äá»‹nh lÃ­ 1:</strong>
                <ul>
                  <li>Thanh xÃ  gá»“ láº¯p Ä‘áº·t trÃªn cao cÃ¡ch sÃ n $8\\text{ m}$, do Ä‘Ã³ $d \\not\\subset (P)$.</li>
                  <li>DÆ°á»›i máº·t sÃ n, cÃ¡c ká»¹ sÆ° luÃ´n thi cÃ´ng mÃ©p chÃ¢n tÆ°á»ng hoáº·c váº¡ch tim phÃ¢n lÃ n nhÃ  xÆ°á»Ÿng lÃ  má»™t Ä‘Æ°á»ng tháº³ng $b \\subset (P)$.</li>
                  <li>Khi láº¯p Ä‘áº·t, thá»£ dá»±ng cÄƒn chá»‰nh xÃ  gá»“ $d$ song song chÃ­nh xÃ¡c vá»›i Ä‘Æ°á»ng giÃ³ng chÃ¢n tÆ°á»ng $b$ dÆ°á»›i sÃ n ($d // b$).</li>
                </ul>
                </p>
                <p>3. <strong>Káº¿t luáº­n:</strong> Theo Äá»‹nh lÃ­ 1:
                $\\begin{cases} d \\not\\subset (P) \\\\ b \\subset (P) \\\\ d // b \\end{cases} \\implies d // (P)$
                </p>
                <p><strong>Ã nghÄ©a thá»±c táº¿:</strong> Nhá» Ä‘á»‹nh lÃ­ toÃ¡n há»c, ká»¹ sÆ° chá»‰ cáº§n cÄƒn chá»‰nh song song vá»›i má»™t Ä‘Æ°á»ng má»‘c dÆ°á»›i máº·t Ä‘áº¥t lÃ  báº£o Ä‘áº£m toÃ n bá»™ thanh xÃ  gá»“ song song vá»›i sÃ n nhÃ , giÃºp tráº§n nhÃ  chá»‹u lá»±c Ä‘á»“ng Ä‘á»u vÃ  khÃ´ng bá»‹ váº¹o lá»‡ch!</p>
              `,
              audioScript: "Äá»‹nh lÃ­ 1 chÃ­nh lÃ  bÃ­ quyáº¿t ká»³ diá»‡u cá»§a ngÃ nh xÃ¢y dá»±ng cÃ¡c em áº¡! BÃ¡c thá»£ há»“ hay chÃº ká»¹ sÆ° khÃ´ng cáº§n leo trÃ¨o Ä‘o Ä‘áº¡c hÃ ng nghÃ¬n Ä‘iá»ƒm trÃªn cao, mÃ  chá»‰ cáº§n cÄƒn chá»‰nh thanh xÃ  gá»“ trÃªn mÃ¡i song song vá»›i mÃ©p chÃ¢n tÆ°á»ng náº±m trÃªn máº·t sÃ n, thÃ¬ Ä‘á»‹nh lÃ­ 1 báº£o Ä‘áº£m má»™t trÄƒm pháº§n trÄƒm xÃ  gá»“ Ä‘Ã£ song song vá»›i toÃ n bá»™ máº·t sÃ n nhÃ  xÆ°á»Ÿng rá»“i!",
              audioUrl: "assets/audio/b12_wrapup.mp3"
            },
            interactiveChallenges: [
              {
                type: "quiz",
                title: "Thá»­ thÃ¡ch 1: Tráº¯c nghiá»‡m Ä‘iá»u kiá»‡n song song",
                question: "Cho Ä‘Æ°á»ng tháº³ng $d$ vÃ  máº·t pháº³ng $(\\alpha)$. Äiá»u kiá»‡n nÃ o sau Ä‘Ã¢y lÃ  Äá»¦ Ä‘á»ƒ káº¿t luáº­n $d // (\\alpha)$?",
                options: [
                  "A. $d$ song song vá»›i má»™t Ä‘Æ°á»ng tháº³ng $a$ báº¥t ká»³.",
                  "B. $d$ khÃ´ng cÃ³ Ä‘iá»ƒm chung vá»›i máº·t pháº³ng $(\\alpha)$.",
                  "C. $d$ song song vá»›i Ä‘Æ°á»ng tháº³ng $a$ náº±m trong $(\\alpha)$ vÃ  $d$ khÃ´ng náº±m trong $(\\alpha)$.",
                  "D. $d$ vÃ  $(\\alpha)$ cÃ³ Ä‘Ãºng má»™t Ä‘iá»ƒm chung."
                ],
                correctIndex: 2,
                explanation: "Theo Äá»‹nh lÃ­ 1: Náº¿u Ä‘Æ°á»ng tháº³ng d khÃ´ng náº±m trong máº·t pháº³ng (alpha) vÃ  song song vá»›i Ä‘Æ°á»ng tháº³ng a náº±m trong (alpha) thÃ¬ d song song vá»›i (alpha). ÄÃ¡p Ã¡n C Ä‘áº§y Ä‘á»§ vÃ  chÃ­nh xÃ¡c nháº¥t!"
              },
              {
                type: "matching",
                title: "Thá»­ thÃ¡ch 2: GhÃ©p cáº·p vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i vÃ  sá»‘ Ä‘iá»ƒm chung",
                instruction: "HÃ£y ghÃ©p má»—i vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i á»Ÿ Cá»™t A vá»›i sá»‘ Ä‘iá»ƒm chung tÆ°Æ¡ng á»©ng á»Ÿ Cá»™t B:",
                pairs: [
                  { left: "d // (alpha)", right: "KhÃ´ng cÃ³ Ä‘iá»ƒm chung nÃ o (0 Ä‘iá»ƒm)" },
                  { left: "d cáº¯t (alpha) táº¡i M", right: "CÃ³ Ä‘Ãºng má»™t Ä‘iá»ƒm chung duy nháº¥t (1 Ä‘iá»ƒm)" },
                  { left: "d náº±m trong (alpha)", right: "CÃ³ vÃ´ sá»‘ Ä‘iá»ƒm chung" },
                  { left: "(alpha) cap (beta) = d'", right: "Giao tuyáº¿n cá»§a hai máº·t pháº³ng" }
                ]
              },
              {
                type: "true_false",
                title: "Thá»­ thÃ¡ch 3: Kháº£o sÃ¡t ÄÃºng / Sai (Cáº¥u trÃºc má»›i 2025)",
                instruction: "Cho hÃ¬nh chÃ³p $S.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. XÃ©t tÃ­nh ÄÃºng/Sai cá»§a cÃ¡c kháº³ng Ä‘á»‹nh sau:",
                statements: [
                  { text: "a) ÄÆ°á»ng tháº³ng AB song song vá»›i máº·t pháº³ng (SCD).", isTrue: true, explain: "ÄÃºng vÃ¬ AB khÃ´ng náº±m trong (SCD), AB // CD vÃ  CD náº±m trong (SCD)." },
                  { text: "b) ÄÆ°á»ng tháº³ng SC song song vá»›i máº·t pháº³ng (SAB).", isTrue: false, explain: "Sai vÃ¬ SC vÃ  (SAB) cÃ³ Ä‘iá»ƒm chung lÃ  S nÃªn SC cáº¯t (SAB) táº¡i S." },
                  { text: "c) Náº¿u M, N láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a SA, SD thÃ¬ MN // (ABCD).", isTrue: true, explain: "ÄÃºng vÃ¬ MN lÃ  Ä‘Æ°á»ng trung bÃ¬nh tam giÃ¡c SAD nÃªn MN // AD, mÃ  AD náº±m trong (ABCD)." },
                  { text: "d) Giao tuyáº¿n cá»§a hai máº·t pháº³ng (SAB) vÃ  (SCD) lÃ  Ä‘Æ°á»ng tháº³ng Ä‘i qua S vÃ  cáº¯t AB.", isTrue: false, explain: "Sai vÃ¬ AB // CD nÃªn giao tuyáº¿n cá»§a (SAB) vÃ  (SCD) pháº£i lÃ  Ä‘Æ°á»ng tháº³ng Ä‘i qua S vÃ  song song vá»›i AB vÃ  CD." }
                ]
              }
            ]
          },
{
            id: "11-c4-b13",
            number: "BÃ i 13",
            title: "Hai máº·t pháº³ng song song",
            sections: [
              {
                id: "11-c4-b13-s1",
                num: "1",
                title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i vÃ  Ä‘iá»u kiá»‡n song song",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m hai máº·t pháº³ng song song", summary: "Hai máº·t pháº³ng khÃ´ng cÃ³ Ä‘iá»ƒm chung." },
                  { key: "b", title: "Äiá»u kiá»‡n Ä‘á»ƒ hai máº·t pháº³ng song song", summary: "Máº·t pháº³ng (P) chá»©a hai Ä‘Æ°á»ng tháº³ng cáº¯t nhau cÃ¹ng song song vá»›i máº·t pháº³ng (Q)." }
                ]
              },
              {
                id: "11-c4-b13-s2",
                num: "2",
                title: "TÃ­nh cháº¥t vÃ  cÃ¡c hÃ¬nh khá»‘i cÆ¡ báº£n",
                subsections: [
                  { key: "a", title: "Äá»‹nh lÃ­ ThalÃ¨s trong khÃ´ng gian", summary: "CÃ¡c máº·t pháº³ng song song cháº¯n trÃªn hai Ä‘Æ°á»ng tháº³ng báº¥t kÃ¬ cÃ¡c Ä‘oáº¡n tháº³ng tá»‰ lá»‡." },
                  { key: "b", title: "HÃ¬nh lÄƒng trá»¥ vÃ  hÃ¬nh há»™p", summary: "ÄÃ¡y lÃ  cÃ¡c Ä‘a giÃ¡c báº±ng nhau náº±m trÃªn hai máº·t pháº³ng song song, máº·t bÃªn lÃ  hÃ¬nh bÃ¬nh hÃ nh." }
                ]
              }
            ]
          },
          {
            id: "11-c4-b14",
            number: "BÃ i 14",
            title: "PhÃ©p chiáº¿u song song",
            sections: [
              {
                id: "11-c4-b14-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m phÃ©p chiáº¿u song song",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng chiáº¿u vÃ  máº·t pháº³ng chiáº¿u", summary: "ÄÆ°á»ng tháº³ng d khÃ´ng song song vá»›i (P), phÃ©p gÃ¡n má»—i Ä‘iá»ƒm M vá»›i hÃ¬nh chiáº¿u M'." },
                  { key: "b", title: "TÃ­nh cháº¥t cá»§a phÃ©p chiáº¿u song song", summary: "Báº£o toÃ n tÃ­nh tháº³ng hÃ ng, thá»© tá»± Ä‘iá»ƒm vÃ  tá»‰ sá»‘ cá»§a hai Ä‘oáº¡n tháº³ng cÃ¹ng phÆ°Æ¡ng." }
                ]
              },
              {
                id: "11-c4-b14-s2",
                num: "2",
                title: "HÃ¬nh biá»ƒu diá»…n cá»§a má»™t hÃ¬nh khÃ´ng gian",
                subsections: [
                  { key: "a", title: "Quy táº¯c váº½ hÃ¬nh biá»ƒu diá»…n", summary: "Biá»ƒu diá»…n Ä‘oáº¡n tháº³ng song song báº±ng Ä‘oáº¡n tháº³ng song song, elip biá»ƒu diá»…n cho Ä‘Æ°á»ng trÃ²n." },
                  { key: "b", title: "HÃ¬nh biá»ƒu diá»…n cá»§a tam giÃ¡c, hÃ¬nh bÃ¬nh hÃ nh, hÃ¬nh trÃ²n", summary: "CÃ¡c lÆ°u Ã½ khi phÃ¡c tháº£o mÃ´ hÃ¬nh hÃ¬nh há»c khÃ´ng gian." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-5",
        number: "ChÆ°Æ¡ng V",
        title: "Giá»›i háº¡n. HÃ m sá»‘ liÃªn tá»¥c",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "11-c5-b15",
            number: "BÃ i 15",
            title: "Giá»›i háº¡n cá»§a dÃ£y sá»‘",
            sections: [
              {
                id: "11-c5-b15-s1",
                num: "1",
                title: "Giá»›i háº¡n há»¯u háº¡n cá»§a dÃ£y sá»‘",
                subsections: [
                  { key: "a", title: "DÃ£y sá»‘ cÃ³ giá»›i háº¡n lÃ  0", summary: "lim un = 0 khi |un| cÃ³ thá»ƒ nhá» hÆ¡n sá»‘ dÆ°Æ¡ng bÃ© tuá»³ Ã½ ká»ƒ tá»« má»™t sá»‘ háº¡ng nÃ o Ä‘Ã³." },
                  { key: "b", title: "DÃ£y sá»‘ cÃ³ giá»›i háº¡n há»¯u háº¡n a", summary: "lim un = a <=> lim(un - a) = 0 vÃ  cÃ¡c Ä‘á»‹nh lÃ­ vá» phÃ©p toÃ¡n giá»›i háº¡n." }
                ]
              },
              {
                id: "11-c5-b15-s2",
                num: "2",
                title: "Cáº¥p sá»‘ nhÃ¢n lÃ¹i vÃ´ háº¡n vÃ  giá»›i háº¡n vÃ´ cá»±c",
                subsections: [
                  { key: "a", title: "Tá»•ng cá»§a cáº¥p sá»‘ nhÃ¢n lÃ¹i vÃ´ háº¡n", summary: "S = u1 / (1 - q) vá»›i |q| < 1." },
                  { key: "b", title: "DÃ£y sá»‘ dáº§n tá»›i vÃ´ cá»±c", summary: "KhÃ¡i niá»‡m lim un = +âˆž hoáº·c lim un = -âˆž vÃ  quy táº¯c tÃ­nh." }
                ]
              }
            ]
          },
          {
            id: "11-c5-b16",
            number: "BÃ i 16",
            title: "Giá»›i háº¡n cá»§a hÃ m sá»‘",
            sections: [
              {
                id: "11-c5-b16-s1",
                num: "1",
                title: "Giá»›i háº¡n há»¯u háº¡n táº¡i má»™t Ä‘iá»ƒm",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a vÃ  cÃ¡c phÃ©p toÃ¡n giá»›i háº¡n", summary: "lim_{x->x0} f(x) = L qua dÃ£y sá»‘ vÃ  cÃ¡c quy táº¯c cá»™ng, trá»«, nhÃ¢n, chia." },
                  { key: "b", title: "Giá»›i háº¡n má»™t bÃªn", summary: "Giá»›i háº¡n bÃªn pháº£i lim_{x->x0+} vÃ  giá»›i háº¡n bÃªn trÃ¡i lim_{x->x0-}." }
                ]
              },
              {
                id: "11-c5-b16-s2",
                num: "2",
                title: "Giá»›i háº¡n táº¡i vÃ´ cá»±c vÃ  giá»›i háº¡n vÃ´ cá»±c",
                subsections: [
                  { key: "a", title: "Giá»›i háº¡n khi x tiáº¿n tá»›i Â±âˆž", summary: "KhÃ¡i niá»‡m tiá»‡m cáº­n sÆ¡ khai vÃ  cÃ¡ch khá»­ dáº¡ng vÃ´ Ä‘á»‹nh âˆž/âˆž." },
                  { key: "b", title: "Giá»›i háº¡n vÃ´ cá»±c cá»§a hÃ m sá»‘", summary: "Khi f(x) tiáº¿n tá»›i Â±âˆž khi x tiáº¿n tá»›i x0 hoáº·c vÃ´ cá»±c, khá»­ dáº¡ng 0/0, âˆž - âˆž." }
                ]
              }
            ]
          },
          {
            id: "11-c5-b17",
            number: "BÃ i 17",
            title: "HÃ m sá»‘ liÃªn tá»¥c",
            sections: [
              {
                id: "11-c5-b17-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m hÃ m sá»‘ liÃªn tá»¥c",
                subsections: [
                  { key: "a", title: "HÃ m sá»‘ liÃªn tá»¥c táº¡i má»™t Ä‘iá»ƒm", summary: "lim_{x->x0} f(x) = f(x0); khÃ¡i niá»‡m Ä‘iá»ƒm giÃ¡n Ä‘oáº¡n." },
                  { key: "b", title: "HÃ m sá»‘ liÃªn tá»¥c trÃªn má»™t khoáº£ng, má»™t Ä‘oáº¡n", summary: "LiÃªn tá»¥c táº¡i má»i Ä‘iá»ƒm trÃªn khoáº£ng vÃ  liÃªn tá»¥c má»™t bÃªn táº¡i cÃ¡c Ä‘áº§u mÃºt." }
                ]
              },
              {
                id: "11-c5-b17-s2",
                num: "2",
                title: "TÃ­nh cháº¥t cá»§a hÃ m sá»‘ liÃªn tá»¥c",
                subsections: [
                  { key: "a", title: "CÃ¡c phÃ©p toÃ¡n trÃªn hÃ m liÃªn tá»¥c", summary: "HÃ m Ä‘a thá»©c, phÃ¢n thá»©c, lÆ°á»£ng giÃ¡c liÃªn tá»¥c trÃªn tá»«ng khoáº£ng xÃ¡c Ä‘á»‹nh." },
                  { key: "b", title: "Äá»‹nh lÃ­ giÃ¡ trá»‹ trung gian", summary: "Náº¿u f(x) liÃªn tá»¥c trÃªn [a; b] vÃ  f(a).f(b) < 0 thÃ¬ phÆ°Æ¡ng trÃ¬nh f(x) = 0 cÃ³ Ã­t nháº¥t má»™t nghiá»‡m." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-6",
        number: "ChÆ°Æ¡ng VI",
        title: "HÃ m sá»‘ mÅ© vÃ  hÃ m sá»‘ lÃ´garit",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "11-c6-b18",
            number: "BÃ i 18",
            title: "Luá»¹ thá»«a vá»›i sá»‘ mÅ© thá»±c",
            sections: [
              {
                id: "11-c6-b18-s1",
                num: "1",
                title: "Luá»¹ thá»«a vá»›i sá»‘ mÅ© nguyÃªn vÃ  cÄƒn báº­c n",
                subsections: [
                  { key: "a", title: "Luá»¹ thá»«a vá»›i sá»‘ mÅ© nguyÃªn", summary: "Sá»‘ mÅ© nguyÃªn dÆ°Æ¡ng, quy Æ°á»›c a^0 = 1 vÃ  sá»‘ mÅ© nguyÃªn Ã¢m a^(-n) = 1/a^n." },
                  { key: "b", title: "KhÃ¡i niá»‡m cÄƒn báº­c n", summary: "CÄƒn báº­c láº» cÃ³ duy nháº¥t má»™t giÃ¡ trá»‹, cÄƒn báº­c cháºµn cá»§a sá»‘ dÆ°Æ¡ng cÃ³ hai giÃ¡ trá»‹ Ä‘á»‘i nhau." }
                ]
              },
              {
                id: "11-c6-b18-s2",
                num: "2",
                title: "Luá»¹ thá»«a vá»›i sá»‘ mÅ© há»¯u tá»‰ vÃ  sá»‘ mÅ© thá»±c",
                subsections: [
                  { key: "a", title: "Luá»¹ thá»«a sá»‘ mÅ© há»¯u tá»‰", summary: "a^(m/n) = â¿âˆš(a^m) vá»›i a > 0." },
                  { key: "b", title: "Luá»¹ thá»«a sá»‘ mÅ© thá»±c vÃ  cÃ¡c tÃ­nh cháº¥t", summary: "Quy táº¯c nhÃ¢n, chia cÃ¹ng cÆ¡ sá»‘, luá»¹ thá»«a cá»§a luá»¹ thá»«a vÃ  so sÃ¡nh luá»¹ thá»«a." }
                ]
              }
            ]
          },
          {
            id: "11-c6-b19",
            number: "BÃ i 19",
            title: "LÃ´garit",
            sections: [
              {
                id: "11-c6-b19-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m vÃ  cÃ¡c loáº¡i lÃ´garit",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a lÃ´garit", summary: "log_a b = Î± <=> a^Î± = b vá»›i 0 < a â‰  1, b > 0." },
                  { key: "b", title: "LÃ´garit tháº­p phÃ¢n vÃ  lÃ´garit tá»± nhiÃªn", summary: "log b = lg b (cÆ¡ sá»‘ 10) vÃ  ln b (cÆ¡ sá»‘ e â‰ˆ 2,71828)." }
                ]
              },
              {
                id: "11-c6-b19-s2",
                num: "2",
                title: "TÃ­nh cháº¥t vÃ  cÃ¡c quy táº¯c tÃ­nh lÃ´garit",
                subsections: [
                  { key: "a", title: "LÃ´garit cá»§a tÃ­ch, thÆ°Æ¡ng, luá»¹ thá»«a", summary: "log_a(xy) = log_a x + log_a y; log_a(x/y) = log_a x - log_a y; log_a(x^Î±) = Î± log_a x." },
                  { key: "b", title: "CÃ´ng thá»©c Ä‘á»•i cÆ¡ sá»‘", summary: "log_a b = (log_c b) / (log_c a); cÃ´ng thá»©c nghá»‹ch Ä‘áº£o log_a b = 1 / log_b a." }
                ]
              }
            ]
          },
          {
            id: "11-c6-b20",
            number: "BÃ i 20",
            title: "HÃ m sá»‘ mÅ© vÃ  hÃ m sá»‘ lÃ´garit",
            sections: [
              {
                id: "11-c6-b20-s1",
                num: "1",
                title: "HÃ m sá»‘ mÅ© y = a^x",
                subsections: [
                  { key: "a", title: "Táº­p xÃ¡c Ä‘á»‹nh vÃ  táº­p giÃ¡ trá»‹", summary: "Táº­p xÃ¡c Ä‘á»‹nh D = R, táº­p giÃ¡ trá»‹ (0; +âˆž)." },
                  { key: "b", title: "Äá»“ thá»‹ vÃ  tÃ­nh biáº¿n thiÃªn", summary: "Äá»“ng biáº¿n khi a > 1, nghá»‹ch biáº¿n khi 0 < a < 1; luÃ´n Ä‘i qua (0; 1)." }
                ]
              },
              {
                id: "11-c6-b20-s2",
                num: "2",
                title: "HÃ m sá»‘ lÃ´garit y = log_a x",
                subsections: [
                  { key: "a", title: "Táº­p xÃ¡c Ä‘á»‹nh vÃ  táº­p giÃ¡ trá»‹", summary: "Táº­p xÃ¡c Ä‘á»‹nh (0; +âˆž), táº­p giÃ¡ trá»‹ R." },
                  { key: "b", title: "Äá»“ thá»‹ vÃ  tÃ­nh biáº¿n thiÃªn", summary: "Äá»“ng biáº¿n khi a > 1, nghá»‹ch biáº¿n khi 0 < a < 1; Ä‘á»“ thá»‹ Ä‘á»‘i xá»©ng qua Ä‘Æ°á»ng tháº³ng y = x." }
                ]
              }
            ]
          },
          {
            id: "11-c6-b21",
            number: "BÃ i 21",
            title: "PhÆ°Æ¡ng trÃ¬nh, báº¥t phÆ°Æ¡ng trÃ¬nh mÅ© vÃ  lÃ´garit",
            sections: [
              {
                id: "11-c6-b21-s1",
                num: "1",
                title: "PhÆ°Æ¡ng trÃ¬nh, báº¥t phÆ°Æ¡ng trÃ¬nh mÅ©",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh mÅ© cÆ¡ báº£n a^x = b", summary: "VÃ´ nghiá»‡m khi b <= 0; cÃ³ nghiá»‡m duy nháº¥t x = log_a b khi b > 0." },
                  { key: "b", title: "Báº¥t phÆ°Æ¡ng trÃ¬nh mÅ© cÆ¡ báº£n", summary: "Giá»¯ chiá»u báº¥t Ä‘áº³ng thá»©c khi a > 1, Ä‘á»•i chiá»u khi 0 < a < 1." }
                ]
              },
              {
                id: "11-c6-b21-s2",
                num: "2",
                title: "PhÆ°Æ¡ng trÃ¬nh, báº¥t phÆ°Æ¡ng trÃ¬nh lÃ´garit",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh lÃ´garit cÆ¡ báº£n log_a x = b", summary: "LuÃ´n cÃ³ nghiá»‡m duy nháº¥t x = a^b." },
                  { key: "b", title: "Báº¥t phÆ°Æ¡ng trÃ¬nh lÃ´garit cÆ¡ báº£n", summary: "ChÃº Ã½ Ä‘iá»u kiá»‡n biá»ƒu thá»©c trong lÃ´garit dÆ°Æ¡ng vÃ  xÃ©t cÆ¡ sá»‘ a." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-7",
        number: "ChÆ°Æ¡ng VII",
        title: "Quan há»‡ vuÃ´ng gÃ³c trong khÃ´ng gian",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "11-c7-b22",
            number: "BÃ i 22",
            title: "Hai Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c",
            sections: [
              {
                id: "11-c7-b22-s1",
                num: "1",
                title: "GÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng trong khÃ´ng gian",
                subsections: [
                  { key: "a", title: "VectÆ¡ chá»‰ phÆ°Æ¡ng cá»§a Ä‘Æ°á»ng tháº³ng", summary: "XÃ¡c Ä‘á»‹nh gÃ³c qua gÃ³c giá»¯a hai vectÆ¡ chá»‰ phÆ°Æ¡ng." },
                  { key: "b", title: "Äá»‹nh nghÄ©a gÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng", summary: "Sá»‘ Ä‘o gÃ³c tá»« 0Â° Ä‘áº¿n 90Â°." }
                ]
              },
              {
                id: "11-c7-b22-s2",
                num: "2",
                title: "Hai Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a vÃ  kÃ­ hiá»‡u a âŠ¥ b", summary: "Khi gÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng báº±ng 90Â°." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p chá»©ng minh hai Ä‘Æ°á»ng vuÃ´ng gÃ³c", summary: "Sá»­ dá»¥ng tÃ­ch vÃ´ hÆ°á»›ng hoáº·c quan há»‡ vuÃ´ng gÃ³c trung gian." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b23",
            number: "BÃ i 23",
            title: "ÄÆ°á»ng tháº³ng vuÃ´ng gÃ³c vá»›i máº·t pháº³ng",
            sections: [
              {
                id: "11-c7-b23-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a vÃ  Ä‘iá»u kiá»‡n vuÃ´ng gÃ³c",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c máº·t pháº³ng", summary: "VuÃ´ng gÃ³c vá»›i má»i Ä‘Æ°á»ng tháº³ng náº±m trong máº·t pháº³ng Ä‘Ã³." },
                  { key: "b", title: "Äiá»u kiá»‡n vuÃ´ng gÃ³c", summary: "ÄÆ°á»ng tháº³ng vuÃ´ng gÃ³c vá»›i hai Ä‘Æ°á»ng tháº³ng cáº¯t nhau cÃ¹ng náº±m trong máº·t pháº³ng." }
                ]
              },
              {
                id: "11-c7-b23-s2",
                num: "2",
                title: "TÃ­nh cháº¥t vÃ  Ä‘á»‹nh lÃ­ ba Ä‘Æ°á»ng vuÃ´ng gÃ³c",
                subsections: [
                  { key: "a", title: "LiÃªn há»‡ song song vÃ  vuÃ´ng gÃ³c", summary: "Hai Ä‘Æ°á»ng song song cÃ¹ng vuÃ´ng gÃ³c má»™t máº·t pháº³ng; hai máº·t pháº³ng vuÃ´ng gÃ³c cÃ¹ng má»™t Ä‘Æ°á»ng." },
                  { key: "b", title: "Äá»‹nh lÃ­ ba Ä‘Æ°á»ng vuÃ´ng gÃ³c", summary: "LiÃªn há»‡ giá»¯a Ä‘Æ°á»ng tháº³ng, hÃ¬nh chiáº¿u vÃ  Ä‘Æ°á»ng náº±m trong máº·t pháº³ng." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b24",
            number: "BÃ i 24",
            title: "PhÃ©p chiáº¿u vuÃ´ng gÃ³c. GÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng",
            sections: [
              {
                id: "11-c7-b24-s1",
                num: "1",
                title: "PhÃ©p chiáº¿u vuÃ´ng gÃ³c",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a phÃ©p chiáº¿u vuÃ´ng gÃ³c", summary: "TrÆ°á»ng há»£p Ä‘áº·c biá»‡t cá»§a phÃ©p chiáº¿u song song khi phÆ°Æ¡ng chiáº¿u vuÃ´ng gÃ³c vá»›i máº·t pháº³ng chiáº¿u." },
                  { key: "b", title: "HÃ¬nh chiáº¿u cá»§a Ä‘iá»ƒm vÃ  Ä‘oáº¡n tháº³ng", summary: "XÃ¡c Ä‘á»‹nh chÃ¢n Ä‘Æ°á»ng vuÃ´ng gÃ³c háº¡ tá»« Ä‘iá»ƒm xuá»‘ng máº·t pháº³ng." }
                ]
              },
              {
                id: "11-c7-b24-s2",
                num: "2",
                title: "GÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a gÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng", summary: "GÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  hÃ¬nh chiáº¿u vuÃ´ng gÃ³c cá»§a nÃ³ lÃªn máº·t pháº³ng." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p xÃ¡c Ä‘á»‹nh vÃ  tÃ­nh sá»‘ Ä‘o gÃ³c", summary: "Dá»±ng hÃ¬nh chiáº¿u vÃ  Ã¡p dá»¥ng há»‡ thá»©c lÆ°á»£ng trong tam giÃ¡c vuÃ´ng." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b25",
            number: "BÃ i 25",
            title: "Hai máº·t pháº³ng vuÃ´ng gÃ³c",
            sections: [
              {
                id: "11-c7-b25-s1",
                num: "1",
                title: "GÃ³c giá»¯a hai máº·t pháº³ng vÃ  gÃ³c nhá»‹ diá»‡n",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m gÃ³c giá»¯a hai máº·t pháº³ng", summary: "GÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng láº§n lÆ°á»£t vuÃ´ng gÃ³c vá»›i hai máº·t pháº³ng Ä‘Ã³." },
                  { key: "b", title: "GÃ³c pháº³ng cá»§a gÃ³c nhá»‹ diá»‡n", summary: "Hai ná»­a máº·t pháº³ng cÃ¹ng bá» vÃ  máº·t cáº¯t vuÃ´ng gÃ³c vá»›i cáº¡nh nhá»‹ diá»‡n." }
                ]
              },
              {
                id: "11-c7-b25-s2",
                num: "2",
                title: "Hai máº·t pháº³ng vuÃ´ng gÃ³c",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a vÃ  Ä‘iá»u kiá»‡n vuÃ´ng gÃ³c", summary: "Máº·t pháº³ng chá»©a Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c vá»›i máº·t pháº³ng kia." },
                  { key: "b", title: "TÃ­nh cháº¥t cá»§a hai máº·t pháº³ng vuÃ´ng gÃ³c", summary: "ÄÆ°á»ng tháº³ng náº±m trong máº·t pháº³ng nÃ y vÃ  vuÃ´ng gÃ³c vá»›i giao tuyáº¿n thÃ¬ vuÃ´ng gÃ³c vá»›i máº·t pháº³ng kia." }
                ]
              },
              {
                id: "11-c7-b25-s3",
                num: "3",
                title: "HÃ¬nh chÃ³p Ä‘á»u vÃ  hÃ¬nh lÄƒng trá»¥ Ä‘á»©ng",
                subsections: [
                  { key: "a", title: "HÃ¬nh chÃ³p Ä‘á»u vÃ  chÃ³p cá»¥t Ä‘á»u", summary: "ÄÃ¡y lÃ  Ä‘a giÃ¡c Ä‘á»u vÃ  chÃ¢n Ä‘Æ°á»ng cao trÃ¹ng tÃ¢m Ä‘Ã¡y." },
                  { key: "b", title: "HÃ¬nh lÄƒng trá»¥ Ä‘á»©ng, hÃ¬nh há»™p chá»¯ nháº­t", summary: "CÃ¡c cáº¡nh bÃªn vuÃ´ng gÃ³c vá»›i Ä‘Ã¡y, cÃ¡c máº·t bÃªn lÃ  hÃ¬nh chá»¯ nháº­t." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b26",
            number: "BÃ i 26",
            title: "Khoáº£ng cÃ¡ch",
            sections: [
              {
                id: "11-c7-b26-s1",
                num: "1",
                title: "Khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm Ä‘áº¿n Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng",
                subsections: [
                  { key: "a", title: "Khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm Ä‘áº¿n Ä‘Æ°á»ng tháº³ng", summary: "Äá»™ dÃ i Ä‘oáº¡n vuÃ´ng gÃ³c káº» tá»« Ä‘iá»ƒm Ä‘áº¿n Ä‘Æ°á»ng tháº³ng." },
                  { key: "b", title: "Khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm Ä‘áº¿n máº·t pháº³ng", summary: "Äá»™ dÃ i Ä‘oáº¡n vuÃ´ng gÃ³c káº» tá»« Ä‘iá»ƒm Ä‘áº¿n máº·t pháº³ng; phÆ°Æ¡ng phÃ¡p Ä‘á»•i Ä‘iá»ƒm." }
                ]
              },
              {
                id: "11-c7-b26-s2",
                num: "2",
                title: "Khoáº£ng cÃ¡ch giá»¯a cÃ¡c Ä‘á»‘i tÆ°á»£ng song song",
                subsections: [
                  { key: "a", title: "Khoáº£ng cÃ¡ch giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng song song", summary: "Láº¥y má»™t Ä‘iá»ƒm báº¥t kÃ¬ trÃªn Ä‘Æ°á»ng tháº³ng tÃ­nh Ä‘áº¿n máº·t pháº³ng." },
                  { key: "b", title: "Khoáº£ng cÃ¡ch giá»¯a hai máº·t pháº³ng song song", summary: "Äá»™ dÃ i Ä‘oáº¡n tháº³ng ná»‘i hai Ä‘iá»ƒm tÆ°Æ¡ng á»©ng trÃªn hai máº·t pháº³ng vÃ  vuÃ´ng gÃ³c vá»›i chÃºng." }
                ]
              },
              {
                id: "11-c7-b26-s3",
                num: "3",
                title: "Khoáº£ng cÃ¡ch giá»¯a hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau",
                subsections: [
                  { key: "a", title: "Äoáº¡n vuÃ´ng gÃ³c chung", summary: "Äoáº¡n tháº³ng cáº¯t cáº£ hai Ä‘Æ°á»ng vÃ  vuÃ´ng gÃ³c vá»›i cáº£ hai Ä‘Æ°á»ng." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p máº·t pháº³ng song song", summary: "Chuyá»ƒn vá» khoáº£ng cÃ¡ch tá»« Ä‘Æ°á»ng nÃ y Ä‘áº¿n máº·t pháº³ng song song chá»©a Ä‘Æ°á»ng kia." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b27",
            number: "BÃ i 27",
            title: "Thá»ƒ tÃ­ch",
            sections: [
              {
                id: "11-c7-b27-s1",
                num: "1",
                title: "Thá»ƒ tÃ­ch cá»§a hÃ¬nh chÃ³p vÃ  hÃ¬nh chÃ³p cá»¥t Ä‘á»u",
                subsections: [
                  { key: "a", title: "Thá»ƒ tÃ­ch hÃ¬nh chÃ³p", summary: "V = 1/3 . S_Ä‘Ã¡y . h." },
                  { key: "b", title: "Thá»ƒ tÃ­ch hÃ¬nh chÃ³p cá»¥t Ä‘á»u", summary: "V = 1/3 . h . (S1 + S2 + âˆš(S1.S2))." }
                ]
              },
              {
                id: "11-c7-b27-s2",
                num: "2",
                title: "Thá»ƒ tÃ­ch cá»§a hÃ¬nh lÄƒng trá»¥ vÃ  hÃ¬nh há»™p",
                subsections: [
                  { key: "a", title: "Thá»ƒ tÃ­ch hÃ¬nh lÄƒng trá»¥", summary: "V = S_Ä‘Ã¡y . h." },
                  { key: "b", title: "Thá»ƒ tÃ­ch hÃ¬nh há»™p chá»¯ nháº­t vÃ  khá»‘i láº­p phÆ°Æ¡ng", summary: "V = a.b.c; khá»‘i láº­p phÆ°Æ¡ng V = aÂ³." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-8",
        number: "ChÆ°Æ¡ng VIII",
        title: "CÃ¡c quy táº¯c tÃ­nh xÃ¡c suáº¥t",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "11-c8-b28",
            number: "BÃ i 28",
            title: "Biáº¿n cá»‘ há»£p, biáº¿n cá»‘ giao, biáº¿n cá»‘ Ä‘á»™c láº­p",
            sections: [
              {
                id: "11-c8-b28-s1",
                num: "1",
                title: "Biáº¿n cá»‘ há»£p vÃ  biáº¿n cá»‘ giao",
                subsections: [
                  { key: "a", title: "Biáº¿n cá»‘ há»£p A âˆª B", summary: "'Biáº¿n cá»‘ A hoáº·c B xáº£y ra', biá»ƒu diá»…n táº­p há»£p báº±ng há»£p hai táº­p káº¿t quáº£." },
                  { key: "b", title: "Biáº¿n cá»‘ giao AB", summary: "'Cáº£ biáº¿n cá»‘ A vÃ  B cÃ¹ng xáº£y ra', biá»ƒu diá»…n táº­p há»£p báº±ng giao hai táº­p káº¿t quáº£." }
                ]
              },
              {
                id: "11-c8-b28-s2",
                num: "2",
                title: "Hai biáº¿n cá»‘ xung kháº¯c vÃ  Ä‘á»™c láº­p",
                subsections: [
                  { key: "a", title: "Hai biáº¿n cá»‘ xung kháº¯c", summary: "A vÃ  B khÃ´ng thá»ƒ cÃ¹ng xáº£y ra: AB = âˆ…." },
                  { key: "b", title: "Hai biáº¿n cá»‘ Ä‘á»™c láº­p", summary: "Viá»‡c xáº£y ra hay khÃ´ng cá»§a biáº¿n cá»‘ nÃ y khÃ´ng áº£nh hÆ°á»Ÿng Ä‘áº¿n xÃ¡c suáº¥t xáº£y ra cá»§a biáº¿n cá»‘ kia." }
                ]
              }
            ]
          },
          {
            id: "11-c8-b29",
            number: "BÃ i 29",
            title: "CÃ´ng thá»©c cá»™ng xÃ¡c suáº¥t",
            sections: [
              {
                id: "11-c8-b29-s1",
                num: "1",
                title: "CÃ´ng thá»©c cá»™ng cho hai biáº¿n cá»‘ xung kháº¯c",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c P(A âˆª B) = P(A) + P(B)", summary: "Ãp dá»¥ng khi A vÃ  B xung kháº¯c nhau." },
                  { key: "b", title: "XÃ¡c suáº¥t cá»§a biáº¿n cá»‘ Ä‘á»‘i", summary: "P(A_) = 1 - P(A) giÃºp Ä‘Æ¡n giáº£n hoÃ¡ cÃ¡c bÃ i toÃ¡n Ä‘áº¿m phá»©c táº¡p." }
                ]
              },
              {
                id: "11-c8-b29-s2",
                num: "2",
                title: "CÃ´ng thá»©c cá»™ng xÃ¡c suáº¥t tá»•ng quÃ¡t",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tá»•ng quÃ¡t P(A âˆª B) = P(A) + P(B) - P(AB)", summary: "Ãp dá»¥ng cho hai biáº¿n cá»‘ báº¥t kÃ¬ cÃ³ thá»ƒ cÃ¹ng xáº£y ra." },
                  { key: "b", title: "Luyá»‡n táº­p bÃ i toÃ¡n xÃ¡c suáº¥t thá»±c táº¿", summary: "PhÃ¢n tÃ­ch biáº¿n cá»‘ thi Ä‘á»— mÃ´n há»c, kiá»ƒm Ä‘á»‹nh cháº¥t lÆ°á»£ng." }
                ]
              }
            ]
          },
          {
            id: "11-c8-b30",
            number: "BÃ i 30",
            title: "CÃ´ng thá»©c nhÃ¢n xÃ¡c suáº¥t cho hai biáº¿n cá»‘ Ä‘á»™c láº­p",
            sections: [
              {
                id: "11-c8-b30-s1",
                num: "1",
                title: "CÃ´ng thá»©c nhÃ¢n xÃ¡c suáº¥t",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c P(AB) = P(A) . P(B)", summary: "Ãp dá»¥ng khi A vÃ  B lÃ  hai biáº¿n cá»‘ Ä‘á»™c láº­p." },
                  { key: "b", title: "Má»Ÿ rá»™ng cho nhiá»u biáº¿n cá»‘ Ä‘á»™c láº­p", summary: "P(A1.A2...An) = P(A1).P(A2)...P(An)." }
                ]
              },
              {
                id: "11-c8-b30-s2",
                num: "2",
                title: "á»¨ng dá»¥ng trong cÃ¡c bÃ i toÃ¡n thá»±c tiá»…n",
                subsections: [
                  { key: "a", title: "BÃ i toÃ¡n máº¡ch Ä‘iá»‡n vÃ  Ä‘á»™ tin cáº­y há»‡ thá»‘ng", summary: "XÃ¡c suáº¥t bÃ³ng Ä‘Ã¨n sÃ¡ng, linh kiá»‡n hoáº¡t Ä‘á»™ng bÃ¬nh thÆ°á»ng." },
                  { key: "b", title: "BÃ i toÃ¡n báº¯n bia vÃ  thá»ƒ thao", summary: "TÃ­nh xÃ¡c suáº¥t Ã­t nháº¥t má»™t ngÆ°á»i báº¯n trÃºng má»¥c tiÃªu." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-9",
        number: "ChÆ°Æ¡ng IX",
        title: "Äáº¡o hÃ m",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "11-c9-b31",
            number: "BÃ i 31",
            title: "Äá»‹nh nghÄ©a vÃ  Ã½ nghÄ©a cá»§a Ä‘áº¡o hÃ m",
            sections: [
              {
                id: "11-c9-b31-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m Ä‘áº¡o hÃ m táº¡i má»™t Ä‘iá»ƒm",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a Ä‘áº¡o hÃ m báº±ng giá»›i háº¡n tá»‰ sá»‘", summary: "f'(x0) = lim_{x->x0} [f(x) - f(x0)] / (x - x0) = lim_{Î”x->0} Î”y / Î”x." },
                  { key: "b", title: "Äáº¡o hÃ m trÃªn má»™t khoáº£ng", summary: "HÃ m sá»‘ cÃ³ Ä‘áº¡o hÃ m táº¡i má»i Ä‘iá»ƒm thuá»™c khoáº£ng." }
                ]
              },
              {
                id: "11-c9-b31-s2",
                num: "2",
                title: "Ã nghÄ©a cá»§a Ä‘áº¡o hÃ m",
                subsections: [
                  { key: "a", title: "Ã nghÄ©a hÃ¬nh há»c vÃ  phÆ°Æ¡ng trÃ¬nh tiáº¿p tuyáº¿n", summary: "Há»‡ sá»‘ gÃ³c k = f'(x0); phÆ°Æ¡ng trÃ¬nh tiáº¿p tuyáº¿n y - y0 = f'(x0)(x - x0)." },
                  { key: "b", title: "Ã nghÄ©a váº­t lÃ­", summary: "Váº­n tá»‘c tá»©c thá»i v(t) = s'(t) vÃ  cÆ°á»ng Ä‘á»™ dÃ²ng Ä‘iá»‡n tá»©c thá»i." }
                ]
              }
            ]
          },
          {
            id: "11-c9-b32",
            number: "BÃ i 32",
            title: "CÃ¡c quy táº¯c tÃ­nh Ä‘áº¡o hÃ m",
            sections: [
              {
                id: "11-c9-b32-s1",
                num: "1",
                title: "Äáº¡o hÃ m cá»§a cÃ¡c hÃ m sá»‘ thÆ°á»ng gáº·p",
                subsections: [
                  { key: "a", title: "Äáº¡o hÃ m hÃ m Ä‘a thá»©c vÃ  cÄƒn thá»©c", summary: "(c)' = 0; (x^n)' = n.x^(n-1); (âˆšx)' = 1/(2âˆšx)." },
                  { key: "b", title: "Äáº¡o hÃ m hÃ m lÆ°á»£ng giÃ¡c", summary: "(sin x)' = cos x; (cos x)' = -sin x; (tan x)' = 1/cosÂ²x; (cot x)' = -1/sinÂ²x." }
                ]
              },
              {
                id: "11-c9-b32-s2",
                num: "2",
                title: "CÃ¡c quy táº¯c Ä‘áº¡i sá»‘ vÃ  Ä‘áº¡o hÃ m hÃ m há»£p",
                subsections: [
                  { key: "a", title: "Quy táº¯c Ä‘áº¡o hÃ m tá»•ng, hiá»‡u, tÃ­ch, thÆ°Æ¡ng", summary: "(u Â± v)' = u' Â± v'; (uv)' = u'v + uv'; (u/v)' = (u'v - uv')/vÂ²." },
                  { key: "b", title: "Äáº¡o hÃ m cá»§a hÃ m há»£p", summary: "y'_x = y'_u . u'_x vÃ  báº£ng cÃ´ng thá»©c hÃ m há»£p." }
                ]
              }
            ]
          },
          {
            id: "11-c9-b33",
            number: "BÃ i 33",
            title: "Äáº¡o hÃ m cáº¥p hai",
            sections: [
              {
                id: "11-c9-b33-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m Ä‘áº¡o hÃ m cáº¥p hai",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a f''(x)", summary: "Äáº¡o hÃ m cá»§a Ä‘áº¡o hÃ m cáº¥p má»™t: f''(x) = (f'(x))'." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p tÃ­nh Ä‘áº¡o hÃ m cáº¥p hai", summary: "TÃ­nh f'(x) rá»“i tiáº¿p tá»¥c Ã¡p dá»¥ng quy táº¯c tÃ­nh Ä‘áº¡o hÃ m láº§n thá»© hai." }
                ]
              },
              {
                id: "11-c9-b33-s2",
                num: "2",
                title: "Ã nghÄ©a váº­t lÃ­ cá»§a Ä‘áº¡o hÃ m cáº¥p hai",
                subsections: [
                  { key: "a", title: "Gia tá»‘c tá»©c thá»i", summary: "a(t) = v'(t) = s''(t) trong chuyá»ƒn Ä‘á»™ng tháº³ng biáº¿n Ä‘á»•i." },
                  { key: "b", title: "á»¨ng dá»¥ng trong cÆ¡ há»c", summary: "Äá»‹nh luáº­t II Newton F = m.a = m.s''(t)." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "12": {
    grade: "12",
    gradeTitle: "ToÃ¡n Lá»›p 12",
    subtitle: "ChÆ°Æ¡ng trÃ¬nh GDPT 2018 â€¢ Bá»™ sÃ¡ch Káº¿t ná»‘i tri thá»©c vá»›i cuá»™c sá»‘ng",
    chapters: [
      {
        id: "c12-1",
        number: "ChÆ°Æ¡ng I",
        title: "á»¨ng dá»¥ng Ä‘áº¡o hÃ m Ä‘á»ƒ kháº£o sÃ¡t vÃ  váº½ Ä‘á»“ thá»‹ hÃ m sá»‘",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "12-c1-b1",
            number: "BÃ i 1",
            title: "TÃ­nh Ä‘Æ¡n Ä‘iá»‡u vÃ  cá»±c trá»‹ cá»§a hÃ m sá»‘",
            sections: [
              {
                id: "12-c1-b1-s1",
                num: "1",
                title: "TÃ­nh Ä‘Æ¡n Ä‘iá»‡u cá»§a hÃ m sá»‘",
                subsections: [
                  { key: "a", title: "Dáº¥u cá»§a Ä‘áº¡o hÃ m vÃ  sá»± biáº¿n thiÃªn", summary: "f'(x) >= 0 trÃªn K => hÃ m sá»‘ Ä‘á»“ng biáº¿n; f'(x) <= 0 => hÃ m sá»‘ nghá»‹ch biáº¿n." },
                  { key: "b", title: "Quy táº¯c xÃ©t tÃ­nh Ä‘Æ¡n Ä‘iá»‡u", summary: "Láº­p báº£ng xÃ©t dáº¥u Ä‘áº¡o hÃ m f'(x) vÃ  káº¿t luáº­n khoáº£ng Ä‘Æ¡n Ä‘iá»‡u." }
                ]
              },
              {
                id: "12-c1-b1-s2",
                num: "2",
                title: "Cá»±c trá»‹ cá»§a hÃ m sá»‘",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m Ä‘iá»ƒm cá»±c Ä‘áº¡i, cá»±c tiá»ƒu", summary: "GiÃ¡ trá»‹ cá»±c Ä‘áº¡i, giÃ¡ trá»‹ cá»±c tiá»ƒu vÃ  Ä‘iá»ƒm cá»±c trá»‹ cá»§a Ä‘á»“ thá»‹ hÃ m sá»‘." },
                  { key: "b", title: "Äiá»u kiá»‡n Ä‘á»§ Ä‘á»ƒ hÃ m sá»‘ cÃ³ cá»±c trá»‹", summary: "Äáº¡o hÃ m Ä‘á»•i dáº¥u khi Ä‘i qua x0; dáº¥u hiá»‡u Ä‘áº¡o hÃ m cáº¥p hai f''(x0)." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b2",
            number: "BÃ i 2",
            title: "GiÃ¡ trá»‹ lá»›n nháº¥t vÃ  giÃ¡ trá»‹ nhá» nháº¥t cá»§a hÃ m sá»‘",
            sections: [
              {
                id: "12-c1-b2-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a giÃ¡ trá»‹ lá»›n nháº¥t, nhá» nháº¥t",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a trÃªn táº­p há»£p D", summary: "M = max f(x) khi f(x) <= M vÃ  tá»“n táº¡i x0 Ä‘á»ƒ f(x0) = M; tÆ°Æ¡ng tá»± vá»›i min." },
                  { key: "b", title: "Ã nghÄ©a hÃ¬nh há»c", summary: "Äiá»ƒm cao nháº¥t vÃ  Ä‘iá»ƒm tháº¥p nháº¥t cá»§a Ä‘á»“ thá»‹ hÃ m sá»‘ trÃªn miá»n D." }
                ]
              },
              {
                id: "12-c1-b2-s2",
                num: "2",
                title: "PhÆ°Æ¡ng phÃ¡p tÃ¬m giÃ¡ trá»‹ lá»›n nháº¥t, nhá» nháº¥t",
                subsections: [
                  { key: "a", title: "TÃ¬m GTLN, GTNN trÃªn Ä‘oáº¡n [a; b]", summary: "TÃ­nh giÃ¡ trá»‹ táº¡i cÃ¡c Ä‘áº§u mÃºt vÃ  cÃ¡c Ä‘iá»ƒm dá»«ng bÃªn trong Ä‘oáº¡n rá»“i so sÃ¡nh." },
                  { key: "b", title: "TÃ¬m GTLN, GTNN trÃªn khoáº£ng má»Ÿ", summary: "Sá»­ dá»¥ng báº£ng biáº¿n thiÃªn vÃ  giá»›i háº¡n táº¡i cÃ¡c Ä‘áº§u mÃºt vÃ´ cá»±c." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b3",
            number: "BÃ i 3",
            title: "ÄÆ°á»ng tiá»‡m cáº­n cá»§a Ä‘á»“ thá»‹ hÃ m sá»‘",
            sections: [
              {
                id: "12-c1-b3-s1",
                num: "1",
                title: "ÄÆ°á»ng tiá»‡m cáº­n Ä‘á»©ng",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a báº±ng giá»›i háº¡n má»™t bÃªn", summary: "lim_{x->x0+} f(x) = Â±âˆž hoáº·c lim_{x->x0-} f(x) = Â±âˆž => x = x0 lÃ  tiá»‡m cáº­n Ä‘á»©ng." },
                  { key: "b", title: "CÃ¡ch xÃ¡c Ä‘á»‹nh tiá»‡m cáº­n Ä‘á»©ng cá»§a hÃ m phÃ¢n thá»©c", summary: "Nghiá»‡m cá»§a máº«u sá»‘ khÃ´ng lÃ  nghiá»‡m cá»§a tá»­ sá»‘." }
                ]
              },
              {
                id: "12-c1-b3-s2",
                num: "2",
                title: "ÄÆ°á»ng tiá»‡m cáº­n ngang",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a báº±ng giá»›i háº¡n táº¡i vÃ´ cá»±c", summary: "lim_{x->+âˆž} f(x) = y0 hoáº·c lim_{x->-âˆž} f(x) = y0 => y = y0 lÃ  tiá»‡m cáº­n ngang." },
                  { key: "b", title: "CÃ¡ch xÃ¡c Ä‘á»‹nh tiá»‡m cáº­n ngang", summary: "So sÃ¡nh báº­c cá»§a tá»­ sá»‘ vÃ  máº«u sá»‘ cá»§a hÃ m phÃ¢n thá»©c." }
                ]
              },
              {
                id: "12-c1-b3-s3",
                num: "3",
                title: "ÄÆ°á»ng tiá»‡m cáº­n xiÃªn",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a tiá»‡m cáº­n xiÃªn y = ax + b", summary: "lim_{x->Â±âˆž} [f(x) - (ax + b)] = 0 (vá»›i a â‰  0)." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p xÃ¡c Ä‘á»‹nh há»‡ sá»‘ a vÃ  b", summary: "a = lim f(x)/x; b = lim [f(x) - ax] hoáº·c chia Ä‘a thá»©c tá»­ cho máº«u." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b4",
            number: "BÃ i 4",
            title: "Kháº£o sÃ¡t sá»± biáº¿n thiÃªn vÃ  váº½ Ä‘á»“ thá»‹ cá»§a hÃ m sá»‘",
            sections: [
              {
                id: "12-c1-b4-s1",
                num: "1",
                title: "SÆ¡ Ä‘á»“ kháº£o sÃ¡t hÃ m sá»‘ tá»•ng quÃ¡t",
                subsections: [
                  { key: "a", title: "CÃ¡c bÆ°á»›c kháº£o sÃ¡t hÃ m sá»‘", summary: "Táº­p xÃ¡c Ä‘á»‹nh, Ä‘áº¡o hÃ m, chiá»u biáº¿n thiÃªn, cá»±c trá»‹, tiá»‡m cáº­n, báº£ng biáº¿n thiÃªn." },
                  { key: "b", title: "TÃ¢m Ä‘á»‘i xá»©ng vÃ  trá»¥c Ä‘á»‘i xá»©ng cá»§a Ä‘á»“ thá»‹", summary: "TÃ¬m Ä‘iá»ƒm uá»‘n, giao Ä‘iá»ƒm vá»›i cÃ¡c trá»¥c toáº¡ Ä‘á»™ vÃ  váº½ Ä‘á»“ thá»‹ chÃ­nh xÃ¡c." }
                ]
              },
              {
                id: "12-c1-b4-s2",
                num: "2",
                title: "Kháº£o sÃ¡t cÃ¡c hÃ m sá»‘ tiÃªu biá»ƒu",
                subsections: [
                  { key: "a", title: "HÃ m sá»‘ báº­c ba y = axÂ³ + bxÂ² + cx + d", summary: "HÃ¬nh dáº¡ng Ä‘á»“ thá»‹ chá»¯ N hoáº·c chá»¯ N ngÆ°á»£c, Ä‘iá»ƒm uá»‘n lÃ  tÃ¢m Ä‘á»‘i xá»©ng." },
                  { key: "b", title: "HÃ m phÃ¢n thá»©c báº­c nháº¥t trÃªn báº­c nháº¥t y = (ax+b)/(cx+d)", summary: "Äá»“ thá»‹ hypebol vuÃ´ng gÃ³c, giao Ä‘iá»ƒm hai Ä‘Æ°á»ng tiá»‡m cáº­n lÃ  tÃ¢m Ä‘á»‘i xá»©ng." },
                  { key: "c", title: "HÃ m phÃ¢n thá»©c báº­c hai trÃªn báº­c nháº¥t y = (axÂ²+bx+c)/(dx+e)", summary: "Äá»“ thá»‹ cÃ³ tiá»‡m cáº­n Ä‘á»©ng vÃ  tiá»‡m cáº­n xiÃªn." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b5",
            number: "BÃ i 5",
            title: "á»¨ng dá»¥ng Ä‘áº¡o hÃ m giáº£i quyáº¿t bÃ i toÃ¡n thá»±c tiá»…n",
            sections: [
              {
                id: "12-c1-b5-s1",
                num: "1",
                title: "BÃ i toÃ¡n tá»‘i Æ°u hoÃ¡ hÃ¬nh há»c",
                subsections: [
                  { key: "a", title: "Tá»‘i Æ°u thá»ƒ tÃ­ch vÃ  diá»‡n tÃ­ch", summary: "Há»™p cÃ³ thá»ƒ tÃ­ch lá»›n nháº¥t tá»« táº¥m tÃ´n cho trÆ°á»›c, lon nÆ°á»›c cÃ³ diá»‡n tÃ­ch bá» máº·t nhá» nháº¥t." },
                  { key: "b", title: "Tá»‘i Æ°u Ä‘Æ°á»ng Ä‘i vÃ  khoáº£ng cÃ¡ch", summary: "BÃ i toÃ¡n á»‘ng dáº«n dáº§u, Ä‘Æ°á»ng dÃ¢y Ä‘iá»‡n tá»‘i Æ°u chi phÃ­ láº¯p Ä‘áº·t." }
                ]
              },
              {
                id: "12-c1-b5-s2",
                num: "2",
                title: "BÃ i toÃ¡n tá»‘i Æ°u trong kinh táº¿ vÃ  xÃ£ há»™i",
                subsections: [
                  { key: "a", title: "Tá»‘i Æ°u lá»£i nhuáº­n vÃ  doanh thu", summary: "Lá»£i nhuáº­n = Doanh thu - Chi phÃ­; Ä‘áº¡o hÃ m biÃªn táº¿ (marginal analysis)." },
                  { key: "b", title: "MÃ´ hÃ¬nh hoÃ¡ vÃ  Ä‘Ã¡nh giÃ¡ káº¿t quáº£ thá»±c tiá»…n", summary: "XÃ¡c Ä‘á»‹nh khoáº£ng giÃ¡ trá»‹ biáº¿n thá»±c táº¿ vÃ  Ä‘Æ°a ra khuyáº¿n nghá»‹." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-2",
        number: "ChÆ°Æ¡ng II",
        title: "VectÆ¡ vÃ  há»‡ trá»¥c toáº¡ Ä‘á»™ trong khÃ´ng gian",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "12-c2-b6",
            number: "BÃ i 6",
            title: "VectÆ¡ trong khÃ´ng gian",
            isFeaturedLesson: true,
            teacherWelcome: {
              greetingText: "Tháº§y SÃ¡ng xin chÃ o táº¥t cáº£ cÃ¡c em há»c sinh lá»›p 12 thÃ¢n yÃªu! NÄƒm há»c lá»›p 12 lÃ  má»™t nÄƒm há»c vÃ´ cÃ¹ng Ä‘áº·c biá»‡t vÃ  Ã½ nghÄ©a, nÆ¡i cÃ¡c em sáº½ ná»— lá»±c bá»©t phÃ¡ Ä‘á»ƒ cháº¡m tay vÃ o cÃ¡nh cá»­a trÆ°á»ng Ä‘áº¡i há»c mÆ¡ Æ°á»›c. Tháº§y ráº¥t tá»± hÃ o khi Ä‘Æ°á»£c Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c em trong hÃ nh trÃ¬nh nÃ y. BÃ i 6 hÃ´m nay, 'VectÆ¡ trong khÃ´ng gian', sáº½ Ä‘Æ°a cÃ¡c em bÆ°á»›c vÃ o tháº¿ giá»›i hÃ¬nh há»c tá»a Ä‘á»™ vÃ  khÃ´ng gian 3 chiá»u â€“ ná»™i dung cá»‘t lÃµi chiáº¿m tá»‰ trá»ng Ä‘iá»ƒm ráº¥t cao trong ká»³ thi tá»‘t nghiá»‡p THPT quá»‘c gia. TrÆ°á»›c khi bÆ°á»›c vÃ o bÃ i há»c, cÃ¡c em hÃ£y cÃ¹ng Tháº§y Ä‘iá»ƒm qua cÃ¡c má»¥c tiÃªu trá»ng tÃ¢m cáº§n lÃ m chá»§ nhÃ©: Thá»© nháº¥t, má»Ÿ rá»™ng trá»n váº¹n khÃ¡i niá»‡m vectÆ¡, Ä‘á»™ dÃ i vÃ  cÃ¡c phÃ©p toÃ¡n tá»« máº·t pháº³ng lÃªn khÃ´ng gian ba chiá»u. Thá»© hai, náº¯m vá»¯ng vÃ  váº­n dá»¥ng xuáº¥t sáº¯c Quy táº¯c hÃ¬nh há»™p â€“ cÃ´ng cá»¥ Ä‘áº¯c lá»±c Ä‘á»ƒ phÃ¢n tÃ­ch vectÆ¡ trong khá»‘i Ä‘a diá»‡n. Thá»© ba, lÃ m chá»§ cÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng vÃ  gÃ³c giá»¯a hai vectÆ¡ trong khÃ´ng gian Ä‘á»ƒ chá»©ng minh quan há»‡ vuÃ´ng gÃ³c vÃ  giáº£i quyáº¿t bÃ i toÃ¡n thá»±c táº¿. Tháº§y chÃºc cÃ¡c em luÃ´n giá»¯ vá»¯ng niá»m tin, há»c táº­p hÄƒng say vÃ  chinh phá»¥c trá»n váº¹n Ä‘iá»ƒm mÆ°á»i mÃ´n ToÃ¡n nhÃ©. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng báº¯t Ä‘áº§u tiáº¿t há»c ngay bÃ¢y giá»!",
              audioScript: "Tháº§y SÃ¡ng xin chÃ o táº¥t cáº£ cÃ¡c em há»c sinh lá»›p 12 thÃ¢n yÃªu! NÄƒm há»c lá»›p 12 lÃ  má»™t nÄƒm há»c vÃ´ cÃ¹ng Ä‘áº·c biá»‡t vÃ  Ã½ nghÄ©a, nÆ¡i cÃ¡c em sáº½ ná»— lá»±c bá»©t phÃ¡ Ä‘á»ƒ cháº¡m tay vÃ o cÃ¡nh cá»­a trÆ°á»ng Ä‘áº¡i há»c mÆ¡ Æ°á»›c. Tháº§y ráº¥t tá»± hÃ o khi Ä‘Æ°á»£c Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c em trong hÃ nh trÃ¬nh nÃ y. BÃ i 6 hÃ´m nay, VectÆ¡ trong khÃ´ng gian, sáº½ Ä‘Æ°a cÃ¡c em bÆ°á»›c vÃ o tháº¿ giá»›i hÃ¬nh há»c tá»a Ä‘á»™ vÃ  khÃ´ng gian 3 chiá»u â€“ ná»™i dung cá»‘t lÃµi chiáº¿m tá»‰ trá»ng Ä‘iá»ƒm ráº¥t cao trong ká»³ thi tá»‘t nghiá»‡p trung há»c phá»• thÃ´ng quá»‘c gia. TrÆ°á»›c khi bÆ°á»›c vÃ o bÃ i há»c, cÃ¡c em hÃ£y cÃ¹ng Tháº§y Ä‘iá»ƒm qua cÃ¡c má»¥c tiÃªu trá»ng tÃ¢m cáº§n lÃ m chá»§ nhÃ©. Thá»© nháº¥t, má»Ÿ rá»™ng trá»n váº¹n khÃ¡i niá»‡m vectÆ¡, Ä‘á»™ dÃ i vÃ  cÃ¡c phÃ©p toÃ¡n tá»« máº·t pháº³ng lÃªn khÃ´ng gian ba chiá»u. Thá»© hai, náº¯m vá»¯ng vÃ  váº­n dá»¥ng xuáº¥t sáº¯c Quy táº¯c hÃ¬nh há»™p â€“ cÃ´ng cá»¥ Ä‘áº¯c lá»±c Ä‘á»ƒ phÃ¢n tÃ­ch vectÆ¡ trong khá»‘i Ä‘a diá»‡n. Thá»© ba, lÃ m chá»§ cÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng vÃ  gÃ³c giá»¯a hai vectÆ¡ trong khÃ´ng gian Ä‘á»ƒ chá»©ng minh quan há»‡ vuÃ´ng gÃ³c vÃ  giáº£i quyáº¿t bÃ i toÃ¡n thá»±c táº¿. Tháº§y chÃºc cÃ¡c em luÃ´n giá»¯ vá»¯ng niá»m tin, há»c táº­p hÄƒng say vÃ  chinh phá»¥c trá»n váº¹n Ä‘iá»ƒm mÆ°á»i mÃ´n ToÃ¡n nhÃ©. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng báº¯t Ä‘áº§u tiáº¿t há»c ngay bÃ¢y giá»!",
              audioUrl: "assets/audio/b6_welcome.mp3"
            },
            learningGoals: [
              "Má»Ÿ rá»™ng trá»n váº¹n khÃ¡i niá»‡m vectÆ¡, Ä‘á»™ dÃ i, vectÆ¡ cÃ¹ng hÆ°á»›ng, báº±ng nhau tá»« máº·t pháº³ng lÃªn khÃ´ng gian ba chiá»u.",
              "Náº¯m vá»¯ng vÃ  váº­n dá»¥ng xuáº¥t sáº¯c Quy táº¯c hÃ¬nh há»™p: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ Ä‘á»ƒ phÃ¢n tÃ­ch vectÆ¡ trong khá»‘i Ä‘a diá»‡n.",
              "LÃ m chá»§ Ä‘á»‹nh nghÄ©a gÃ³c giá»¯a hai vectÆ¡ vÃ  cÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng trong khÃ´ng gian $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.",
              "Váº­n dá»¥ng tÃ­ch vÃ´ hÆ°á»›ng Ä‘á»ƒ tÃ­nh Ä‘á»™ dÃ i, chá»©ng minh quan há»‡ vuÃ´ng gÃ³c vÃ  giáº£i bÃ i toÃ¡n thá»±c tiá»…n phÃ¢n tÃ­ch lá»±c 3 chiá»u."
            ],
            hook: {
              title: "TÃ¬nh huá»‘ng thá»±c táº¿: CÃ¢n báº±ng lá»±c cá»§a Ä‘Ã¨n chÃ¹m tráº§n nhÃ  vÃ  flycam bay lÆ¡ lá»­ng",
              story: "Trong má»™t phÃ²ng khÃ¡ch hiá»‡n Ä‘áº¡i, má»™t chiáº¿c Ä‘Ã¨n chÃ¹m pha lÃª náº·ng 12 kg Ä‘Æ°á»£c treo lÆ¡ lá»­ng táº¡i Ä‘iá»ƒm O nhá» 4 sá»£i dÃ¢y cÃ¡p thÃ©p ná»‘i tá»« 4 gÃ³c tráº§n phÃ²ng hÃ¬nh chá»¯ nháº­t. TÆ°Æ¡ng tá»±, má»™t thiáº¿t bá»‹ bay flycam Ä‘ang Ä‘á»©ng yÃªn trÃªn khÃ´ng trung chá»‹u tÃ¡c Ä‘á»™ng Ä‘á»“ng thá»i cá»§a trá»ng lá»±c hÃºt xuá»‘ng, lá»±c nÃ¢ng cá»§a cÃ¡nh quáº¡t vÃ  lá»±c Ä‘áº©y cá»§a giÃ³ táº¡t ngang.",
              question: "LÃ m tháº¿ nÃ o cÃ¡c ká»¹ sÆ° cÃ³ thá»ƒ biá»ƒu diá»…n vÃ  tÃ­nh toÃ¡n tráº¡ng thÃ¡i cÃ¢n báº±ng lá»±c khi cÃ¡c lá»±c tÃ¡c dá»¥ng theo cáº£ ba chiá»u: dÃ i, rá»™ng vÃ  cao trong khÃ´ng gian?",
              teacherNote: "CÃ¢u tráº£ lá»i chÃ­nh xÃ¡c nháº¥t chÃ­nh lÃ  VECTÆ  TRONG KHÃ”NG GIAN vÃ  Quy táº¯c hÃ¬nh há»™p mÃ  Tháº§y trÃ² mÃ¬nh sáº½ cÃ¹ng khÃ¡m phÃ¡ ngay sau Ä‘Ã¢y!",
              illustration: "assets/images/lessons/hook_den_chum_flycam_12.svg",
              illustrationCaption: "Chiáº¿c Ä‘Ã¨n chÃ¹m náº·ng treo lÆ¡ lá»­ng nhá» 4 sá»£i dÃ¢y cÃ¡p thÃ©p tá»a vá» 4 gÃ³c tráº§n phÃ²ng, cÃ¢n báº±ng lá»±c trong khÃ´ng gian 3D."
            },
            teacherVoiceGeneral: {
              title: "Lá»i giáº£ng cá»§a Tháº§y SÃ¡ng: Giá»›i thiá»‡u VectÆ¡ trong khÃ´ng gian",
              script: "Tháº§y SÃ¡ng xin chÃ o táº¥t cáº£ cÃ¡c em há»c sinh lá»›p 12 thÃ¢n yÃªu! Khi bÆ°á»›c vÃ o lá»›p 12, chÃºng ta Ä‘Ã£ tÃ­ch lÅ©y Ä‘Æ°á»£c má»™t ná»n táº£ng vá»¯ng vÃ ng vá» vectÆ¡ tá»« lá»›p 10. HÃ´m nay, Tháº§y SÃ¡ng sáº½ dáº«n dáº¯t cÃ¡c em thá»±c hiá»‡n má»™t bÆ°á»›c nháº£y vá»t: ÄÆ°a toÃ n bá»™ tÆ° duy vectÆ¡ tá»« trang giáº¥y pháº³ng hai chiá»u bay bá»•ng vÃ o khÃ´ng gian ba chiá»u thá»±c táº¿! ViÃªn ngá»c sÃ¡ng nháº¥t trong bÃ i há»c hÃ´m nay chÃ­nh lÃ  Quy táº¯c hÃ¬nh há»™p. Náº¿u nhÆ° á»Ÿ lá»›p 10, quy táº¯c hÃ¬nh bÃ¬nh hÃ nh cho ta tá»•ng hai vectÆ¡ cáº¡nh báº±ng vectÆ¡ Ä‘Æ°á»ng chÃ©o máº·t pháº³ng; thÃ¬ lÃªn lá»›p 12, tá»« má»™t Ä‘á»‰nh cá»§a hÃ¬nh há»™p chá»¯ nháº­t, tá»•ng ba vectÆ¡ theo ba kÃ­ch thÆ°á»›c dÃ i, rá»™ng, cao sáº½ há»£p lá»±c thÃ nh má»™t vectÆ¡ Ä‘Æ°á»ng chÃ©o Ä‘Ã¢m xuyÃªn qua lÃ²ng hÃ¬nh há»™p: vectÆ¡ A C pháº©y báº±ng vectÆ¡ A B cá»™ng vectÆ¡ A D cá»™ng vectÆ¡ A A pháº©y! ÄÃ¢y lÃ  cÃ´ng thá»©c ná»n táº£ng xuáº¥t hiá»‡n thÆ°á»ng xuyÃªn trong Ä‘á» thi tá»‘t nghiá»‡p trung há»c phá»• thÃ´ng quá»‘c gia. NÃ o, Tháº§y trÃ² mÃ¬nh cÃ¹ng nhau báº¯t Ä‘áº§u bÃ i há»c nhÃ©!",
              audioUrl: "assets/audio/b6_main_lecture.mp3"
            },
            sections: [
              {
                id: "12-c2-b6-s1",
                num: "1",
                title: "1. Äá»‹nh nghÄ©a vÃ  cÃ¡c phÃ©p toÃ¡n vectÆ¡ trong khÃ´ng gian",
                subsections: [
                  {
                    key: "a",
                    title: "Äá»‹nh nghÄ©a vectÆ¡ vÃ  cÃ¡c phÃ©p toÃ¡n cá»™ng, trá»«, nhÃ¢n vá»›i má»™t sá»‘",
                    summary: "KhÃ¡i niá»‡m vectÆ¡ trong khÃ´ng gian hoÃ n toÃ n tÆ°Æ¡ng tá»± trong máº·t pháº³ng. Quy táº¯c 3 Ä‘iá»ƒm vÃ  quy táº¯c hÃ¬nh bÃ¬nh hÃ nh váº«n giá»¯ nguyÃªn giÃ¡ trá»‹.",
                    illustration: "assets/images/lessons/hinh1_quy_tac_hinh_hop_12.svg",
                    illustrationCaption: "Quy táº¯c hÃ¬nh há»™p: VectÆ¡ Ä‘Æ°á»ng chÃ©o chÃ­nh AC' = VectÆ¡ AB + VectÆ¡ AD + VectÆ¡ AA'.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-cube"></i> KhÃ¡i niá»‡m trong khÃ´ng gian</div>
                          <p><strong>VectÆ¡ trong khÃ´ng gian</strong> lÃ  má»™t Ä‘oáº¡n tháº³ng cÃ³ hÆ°á»›ng. CÃ¡c khÃ¡i niá»‡m Ä‘iá»ƒm Ä‘áº§u, Ä‘iá»ƒm cuá»‘i, giÃ¡, Ä‘á»™ dÃ i, hai vectÆ¡ cÃ¹ng phÆ°Æ¡ng, cÃ¹ng hÆ°á»›ng, ngÆ°á»£c hÆ°á»›ng vÃ  báº±ng nhau Ä‘Æ°á»£c Ä‘á»‹nh nghÄ©a hoÃ n toÃ n tÆ°Æ¡ng tá»± nhÆ° trong máº·t pháº³ng.</p>
                          <p>CÃ¡c phÃ©p cá»™ng, trá»« vectÆ¡ vÃ  nhÃ¢n vectÆ¡ vá»›i má»™t sá»‘ trong khÃ´ng gian tuÃ¢n theo cÃ¡c quy táº¯c Ä‘áº¡i sá»‘ tÆ°Æ¡ng tá»± nhÆ° trong máº·t pháº³ng.</p>
                        </div>
                        <div class="definition-card" style="margin-top: 15px; border-left: 4px solid #dc2626;">
                          <div class="def-badge" style="background: #dc2626;"><i class="fa-solid fa-crown"></i> QUY Táº®C HÃŒNH Há»˜P (TRá»ŒNG TÃ‚M THI Äáº I Há»ŒC)</div>
                          <p>Cho hÃ¬nh há»™p $ABCD.A'B'C'D'$. Khi Ä‘Ã³ vectÆ¡ Ä‘Æ°á»ng chÃ©o $\\vec{AC'}$ báº±ng tá»•ng cá»§a ba vectÆ¡ xuáº¥t phÃ¡t tá»« cÃ¹ng Ä‘á»‰nh $A$ trÃªn ba cáº¡nh ká»:</p>
                          <div style="background: #fef2f2; padding: 12px 18px; border-radius: 6px; margin: 10px 0; text-align: center;">
                            $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$
                          </div>
                          <p><strong>Chá»©ng minh:</strong></p>
                          <ul>
                            <li>VÃ¬ $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn theo quy táº¯c hÃ¬nh bÃ¬nh hÃ nh: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
                            <li>Tá»© giÃ¡c $ACC'A'$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn: $\\vec{AC} + \\vec{AA'} = \\vec{AC'}$.</li>
                            <li>Thay vÃ o ta Ä‘Æ°á»£c: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ (Ä‘pcm).</li>
                          </ul>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Quy táº¯c hÃ¬nh há»™p cá»±c ká»³ Ä‘áº¹p Ä‘áº½ cÃ¡c em áº¡: Tá»« gá»‘c A, cÃ³ 3 chiá»u khÃ´ng gian gá»“m dÃ i lÃ  A B, rá»™ng lÃ  A D vÃ  cao lÃ  A A pháº©y. Tá»•ng cá»§a ba vectÆ¡ nÃ y sáº½ phÃ³ng má»™t Ä‘Æ°á»ng chÃ©o xuyÃªn qua lÃ²ng khá»‘i há»™p Ä‘áº¿n Ä‘á»‰nh Ä‘á»‘i diá»‡n C pháº©y. Äá» thi Ä‘áº¡i há»c ráº¥t hay há»i cÃ¢u nÃ y dÆ°á»›i dáº¡ng tráº¯c nghiá»‡m lÃ½ thuyáº¿t hoáº·c tÃ­nh toÃ¡n phÃ¢n tÃ­ch lá»±c!",
                    workedExample: {
                      title: "VÃ­ dá»¥ 1: Váº­n dá»¥ng quy táº¯c hÃ¬nh há»™p vÃ  phÃ¢n tÃ­ch vectÆ¡",
                      problem: "Cho hÃ¬nh há»™p $ABCD.A'B'C'D'$. Gá»i $I$ lÃ  tÃ¢m cá»§a hÃ¬nh bÃ¬nh hÃ nh $ABCD$. Chá»©ng minh ráº±ng: $\\vec{A'C} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$ vÃ  $\\vec{SI} = \\frac{1}{2}(\\vec{SA} + \\vec{SC})$ vá»›i Ä‘iá»ƒm $S$ báº¥t ká»³ trong khÃ´ng gian.",
                      thinking: "PhÃ¢n tÃ­ch vectÆ¡ A'C thÃ nh tá»•ng cÃ¡c vectÆ¡ cáº¡nh xuáº¥t phÃ¡t tá»« A'. Ãp dá»¥ng tÃ­nh cháº¥t trung Ä‘iá»ƒm I cá»§a Ä‘Æ°á»ng chÃ©o AC.",
                      solution: `
                        <p>1. <strong>Chá»©ng minh $\\vec{A'C} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$:</strong></p>
                        <ul>
                          <li>Theo quy táº¯c 3 Ä‘iá»ƒm: $\\vec{A'C} = \\vec{A'A} + \\vec{AC}$.</li>
                          <li>VÃ¬ $\\vec{A'A} = -\\vec{AA'}$ vÃ  $ABCD$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn $\\vec{AC} = \\vec{AB} + \\vec{AD}$.</li>
                          <li>Do Ä‘Ã³: $\\vec{A'C} = -\\vec{AA'} + \\vec{AB} + \\vec{AD} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$ (Ä‘pcm).</li>
                        </ul>
                        <p>2. <strong>Chá»©ng minh $\\vec{SI} = \\frac{1}{2}(\\vec{SA} + \\vec{SC})$:</strong></p>
                        <ul>
                          <li>VÃ¬ $I$ lÃ  tÃ¢m hÃ¬nh bÃ¬nh hÃ nh $ABCD$ nÃªn $I$ lÃ  trung Ä‘iá»ƒm cá»§a Ä‘oáº¡n tháº³ng $AC$.</li>
                          <li>Vá»›i Ä‘iá»ƒm $S$ báº¥t ká»³ trong khÃ´ng gian, theo tÃ­nh cháº¥t trung Ä‘iá»ƒm: $\\vec{SA} + \\vec{SC} = 2\\vec{SI} \\implies \\vec{SI} = \\frac{1}{2}(\\vec{SA} + \\vec{SC})$ (Ä‘pcm).</li>
                        </ul>
                      `,
                      teacherGuidance: "Trong khÃ´ng gian, cÃ¡c quy táº¯c trung Ä‘iá»ƒm, quy táº¯c trá»ng tÃ¢m tam giÃ¡c vÃ  quy táº¯c trá»ng tÃ¢m tá»© diá»‡n váº«n giá»¯ nguyÃªn váº¹n dáº¡ng Ä‘áº¡i sá»‘ nhÆ° trong máº·t pháº³ng.",
                      audioScript: "Trong vÃ­ dá»¥ 1, vectÆ¡ A pháº©y C báº±ng trá»« vectÆ¡ A A pháº©y cá»™ng vectÆ¡ A B cá»™ng vectÆ¡ A D. CÃ²n vá»›i Ä‘iá»ƒm I lÃ  trung Ä‘iá»ƒm Ä‘Æ°á»ng chÃ©o A C, ta luÃ´n cÃ³ vectÆ¡ S I báº±ng má»™t pháº§n hai tá»•ng cá»§a vectÆ¡ S A vÃ  vectÆ¡ S C cÃ¡c em nhÃ©!"
                    }
                  }
                ]
              },
              {
                id: "12-c2-b6-s2",
                num: "2",
                title: "2. GÃ³c giá»¯a hai vectÆ¡ vÃ  tÃ­ch vÃ´ hÆ°á»›ng trong khÃ´ng gian",
                subsections: [
                  {
                    key: "a",
                    title: "GÃ³c giá»¯a hai vectÆ¡ trong khÃ´ng gian & CÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng",
                    summary: "Äá»‹nh nghÄ©a gÃ³c giá»¯a hai vectÆ¡ báº¥t ká»³ trong khÃ´ng gian, cÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng vÃ  Ä‘iá»u kiá»‡n vuÃ´ng gÃ³c.",
                    illustration: "assets/images/lessons/hinh2_goc_va_tich_vo_huong_12.svg",
                    illustrationCaption: "ÄÆ°a vá» cÃ¹ng gá»‘c O Ä‘á»ƒ xÃ¡c Ä‘á»‹nh gÃ³c giá»¯a hai vectÆ¡ vÃ  cÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng trong khÃ´ng gian.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-compass-drafting"></i> GÃ³c giá»¯a hai vectÆ¡ trong khÃ´ng gian</div>
                          <p>Trong khÃ´ng gian, cho hai vectÆ¡ $\\vec{u}$ vÃ  $\\vec{v}$ khÃ¡c $\\vec{0}$. Láº¥y má»™t Ä‘iá»ƒm $O$ báº¥t ká»³, dá»±ng $\\vec{OA} = \\vec{u}$ vÃ  $\\vec{OB} = \\vec{v}$.</p>

                          <p>Khi Ä‘Ã³ gÃ³c $\\widehat{AOB}$ vá»›i $0^\\circ \\le \\widehat{AOB} \\le 180^\\circ$ Ä‘Æ°á»£c gá»i lÃ  <strong>gÃ³c giá»¯a hai vectÆ¡ $\\vec{u}$ vÃ  $\\vec{v}$</strong>, kÃ½ hiá»‡u lÃ  $(\\vec{u}, \\vec{v})$.</p>
                        </div>
                        <div class="definition-card" style="margin-top: 15px; border-left: 4px solid #16a34a;">
                          <div class="def-badge" style="background: #16a34a;"><i class="fa-solid fa-calculator"></i> TÃ­ch vÃ´ hÆ°á»›ng trong khÃ´ng gian</div>
                          <p><strong>TÃ­ch vÃ´ hÆ°á»›ng</strong> cá»§a hai vectÆ¡ $\\vec{u}$ vÃ  $\\vec{v}$ trong khÃ´ng gian lÃ  má»™t sá»‘, kÃ½ hiá»‡u lÃ  $\\vec{u} \\cdot \\vec{v}$, Ä‘Æ°á»£c xÃ¡c Ä‘á»‹nh bá»Ÿi cÃ´ng thá»©c:</p>
                          <div style="background: #f0fdf4; padding: 12px 18px; border-radius: 6px; margin: 10px 0; text-align: center;">
                            $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$
                          </div>
                          <p><strong>Äiá»u kiá»‡n vuÃ´ng gÃ³c 3D cá»‘t lÃµi:</strong></p>
                          <div style="background: #eff6ff; padding: 10px 15px; border-radius: 4px; margin: 8px 0;">
                            $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$
                          </div>
                        </div>
                      </div>
                    `,
                    teacherLecture: "TÃ­ch vÃ´ hÆ°á»›ng trong khÃ´ng gian lÃ  vÅ© khÃ­ bÃ­ máº­t sá»‘ 1 Ä‘á»ƒ chá»©ng minh hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau vuÃ´ng gÃ³c Ä‘áº¥y cÃ¡c em! Thay vÃ¬ pháº£i dá»±ng hÃ¬nh chiáº¿u phá»©c táº¡p, ta chá»‰ cáº§n gáº¯n vectÆ¡ vÃ  tÃ­nh tÃ­ch vÃ´ hÆ°á»›ng cá»§a chÃºng, náº¿u ra káº¿t quáº£ báº±ng 0 thÃ¬ láº­p tá»©c káº¿t luáº­n hai Ä‘Æ°á»ng vuÃ´ng gÃ³c nhau ngay!",
                    workedExample: {
                      title: "VÃ­ dá»¥ 2: TÃ­nh tÃ­ch vÃ´ hÆ°á»›ng vÃ  chá»©ng minh hai Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c",
                      problem: "Cho tá»© diá»‡n Ä‘á»u $ABCD$ cÃ³ cáº¡nh báº±ng $a$. TÃ­nh tÃ­ch vÃ´ hÆ°á»›ng $\\vec{AB} \\cdot \\vec{CD}$ vÃ  suy ra má»‘i quan há»‡ giá»¯a hai Ä‘Æ°á»ng tháº³ng $AB$ vÃ  $CD$.",
                      thinking: "ChÃ¨n Ä‘iá»ƒm A vÃ o vectÆ¡ CD: CD = AD - AC. Sau Ä‘Ã³ khai triá»ƒn tÃ­ch vÃ´ hÆ°á»›ng vÃ  dÃ¹ng gÃ³c 60 Ä‘á»™ cá»§a cÃ¡c tam giÃ¡c Ä‘á»u.",
                      solution: `
                        <p>1. Ta cÃ³: $\\vec{CD} = \\vec{AD} - \\vec{AC}$.</p>
                        <p>2. Khi Ä‘Ã³ tÃ­ch vÃ´ hÆ°á»›ng:
                        $\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC}$
                        </p>
                        <p>3. VÃ¬ $ABCD$ lÃ  tá»© diá»‡n Ä‘á»u cáº¡nh $a$ nÃªn cÃ¡c tam giÃ¡c $ABD$ vÃ  $ABC$ lÃ  cÃ¡c tam giÃ¡c Ä‘á»u cáº¡nh $a$, do Ä‘Ã³:
                        $(\\vec{AB}, \\vec{AD}) = \\widehat{BAD} = 60^\\circ \\implies \\vec{AB} \\cdot \\vec{AD} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$
                        $(\\vec{AB}, \\vec{AC}) = \\widehat{BAC} = 60^\\circ \\implies \\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$
                        </p>
                        <p>4. Suy ra: $\\vec{AB} \\cdot \\vec{CD} = \\frac{a^2}{2} - \\frac{a^2}{2} = 0$.</p>
                        <p><strong>Káº¿t luáº­n:</strong> VÃ¬ $\\vec{AB} \\cdot \\vec{CD} = 0$ nÃªn $\\vec{AB} \\perp \\vec{CD}$, tá»©c lÃ  Ä‘Æ°á»ng tháº³ng $AB$ vuÃ´ng gÃ³c vá»›i Ä‘Æ°á»ng tháº³ng $CD$.</p>
                      `,
                      teacherGuidance: "ÄÃ¢y lÃ  má»™t tÃ­nh cháº¥t kinh Ä‘iá»ƒn cá»§a tá»© diá»‡n Ä‘á»u: Tá»«ng cáº·p cáº¡nh Ä‘á»‘i diá»‡n luÃ´n vuÃ´ng gÃ³c vá»›i nhau! PhÆ°Æ¡ng phÃ¡p giáº£i báº±ng tÃ­ch vÃ´ hÆ°á»›ng nhanh vÃ  Ä‘áº¹p hÆ¡n ráº¥t nhiá»u so vá»›i phÆ°Æ¡ng phÃ¡p hÃ¬nh há»c cá»• Ä‘iá»ƒn.",
                      audioScript: "Trong vÃ­ dá»¥ 2, báº±ng cÃ¡ch chÃ¨n Ä‘iá»ƒm A vÃ o vectÆ¡ C D thÃ nh vectÆ¡ A D trá»« vectÆ¡ A C, ta tÃ­nh Ä‘Æ°á»£c tÃ­ch vÃ´ hÆ°á»›ng giá»¯a vectÆ¡ A B vÃ  vectÆ¡ C D Ä‘Ãºng báº±ng khÃ´ng. Suy ra trong tá»© diá»‡n Ä‘á»u, hai cáº¡nh Ä‘á»‘i diá»‡n A B vÃ  C D luÃ´n vuÃ´ng gÃ³c vá»›i nhau cÃ¡c em nhÃ©!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "Váº¬N Dá»¤NG THá»°C Táº¾: QUAY Láº I GIáº¢I QUYáº¾T BÃ€I TOÃN TÃŒNH HUá»NG Má»ž Äáº¦U",
              recap: "TÃ­nh lá»±c cÄƒng trÃªn má»—i sá»£i dÃ¢y cÃ¡p thÃ©p cá»§a chiáº¿c Ä‘Ã¨n chÃ¹m náº·ng 12 kg treo cÃ¢n báº±ng trong khÃ´ng gian 3D.",
              illustration: "assets/images/lessons/wrapup_giai_quyet_den_chum_12.svg",
              illustrationCaption: "MÃ´ hÃ¬nh hÃ³a toÃ¡n há»c cÃ¢n báº±ng lá»±c 3D cá»§a há»‡ thá»‘ng treo Ä‘Ã¨n chÃ¹m.",
              solution: `
                <p><strong>Lá»i giáº£i chi tiáº¿t & MÃ´ hÃ¬nh hÃ³a ToÃ¡n há»c cá»§a Tháº§y SÃ¡ng:</strong></p>
                <p>1. <strong>Äiá»u kiá»‡n cÃ¢n báº±ng trong khÃ´ng gian 3D:</strong>
                ÄÃ¨n chÃ¹m Ä‘á»©ng yÃªn cÃ¢n báº±ng táº¡i Ä‘iá»ƒm $O$ khi vÃ  chá»‰ khi tá»•ng há»£p lá»±c tÃ¡c dá»¥ng lÃªn nÃ³ triá»‡t tiÃªu:
                $\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{T}_4 + \\vec{P} = \\vec{0}$
                Trong Ä‘Ã³ $\\vec{T}_1, \\vec{T}_2, \\vec{T}_3, \\vec{T}_4$ lÃ  lá»±c cÄƒng cá»§a 4 sá»£i cÃ¡p hÆ°á»›ng lÃªn, $\\vec{P}$ lÃ  trá»ng lá»±c kÃ©o tháº³ng Ä‘á»©ng xuá»‘ng ($P = m \\cdot g = 12 \\times 9.8 = 117.6\\text{ N}$).</p>
                <p>2. <strong>TÃ­nh Ä‘á»‘i xá»©ng khÃ´ng gian:</strong>
                Do 4 sá»£i dÃ¢y cÃ¡p cÃ³ cÃ¹ng chiá»u dÃ i vÃ  treo Ä‘á»‘i xá»©ng á»Ÿ 4 gÃ³c tráº§n chá»¯ nháº­t nÃªn lá»±c cÄƒng trÃªn má»—i sá»£i dÃ¢y cÃ³ Ä‘á»™ lá»›n báº±ng nhau:
                $T_1 = T_2 = T_3 = T_4 = T$
                vÃ  má»—i sá»£i dÃ¢y táº¡o vá»›i trá»¥c tháº³ng Ä‘á»©ng má»™t gÃ³c nghiÃªng $\\alpha = 30^\\circ$.</p>
                <p>3. <strong>Chiáº¿u lÃªn trá»¥c tháº³ng Ä‘á»©ng $Oz$:</strong>
                ThÃ nh pháº§n tháº³ng Ä‘á»©ng hÆ°á»›ng lÃªn cá»§a 4 sá»£i dÃ¢y cÃ¡p cÃ¢n báº±ng vá»›i trá»ng lÆ°á»£ng Ä‘Ã¨n:
                $4 \\cdot T \\cdot \\cos 30^\\circ = P = m \\cdot g$
                $\\implies T = \\frac{m \\cdot g}{4 \\cdot \\cos 30^\\circ} = \\frac{12 \\times 9.8}{4 \\times \\frac{\\sqrt{3}}{2}} = \\frac{117.6}{2\\sqrt{3}} \\approx 33.95\\text{ N}$
                </p>
                <p><strong>Ã nghÄ©a thá»±c táº¿:</strong> Nhá» cÃ´ng thá»©c vectÆ¡ khÃ´ng gian nÃ y, cÃ¡c ká»¹ sÆ° tÃ­nh Ä‘Æ°á»£c má»—i sá»£i dÃ¢y cÃ¡p pháº£i chá»‹u má»™t lá»±c kÃ©o tá»‘i thiá»ƒu khoáº£ng 34 N (tÆ°Æ¡ng Ä‘Æ°Æ¡ng treo váº­t náº·ng 3.5 kg). Ká»¹ sÆ° sáº½ chá»n loáº¡i dÃ¢y cÃ¡p chá»‹u táº£i an toÃ n gáº¥p 3-5 láº§n Ä‘á»ƒ Ä‘áº£m báº£o Ä‘Ã¨n chÃ¹m treo vá»¯ng cháº¯c trá»n Ä‘á»i mÃ  khÃ´ng bao giá» bá»‹ Ä‘á»©t rÆ¡i!</p>
              `,
              audioScript: "Quy táº¯c cÃ¢n báº±ng lá»±c trong khÃ´ng gian ba chiá»u Ä‘Ã£ giÃºp cÃ¡c ká»¹ sÆ° giáº£i quyáº¿t má»™t bÃ i toÃ¡n vÃ´ cÃ¹ng thá»±c táº¿: TÃ­nh lá»±c cÄƒng cá»§a bá»‘n sá»£i dÃ¢y cÃ¡p treo Ä‘Ã¨n chÃ¹m. Khi Ä‘Ã¨n náº·ng mÆ°á»i hai ki-lÃ´-gam vÃ  gÃ³c nghiÃªng ba mÆ°Æ¡i Ä‘á»™, má»—i sá»£i dÃ¢y cÃ¡p pháº£i chá»‹u má»™t lá»±c kÃ©o khoáº£ng ba mÆ°Æ¡i tÆ° Niu-tÆ¡n. Nhá» Ä‘Ã³, viá»‡c chá»n dÃ¢y cÃ¡p Ä‘Æ°á»£c tÃ­nh toÃ¡n chuáº©n xÃ¡c tá»«ng con sá»‘, Ä‘áº£m báº£o an toÃ n tuyá»‡t Ä‘á»‘i cho ngÆ°á»i ngá»“i bÃªn dÆ°á»›i!",
              audioUrl: "assets/audio/b6_wrapup.mp3"
            },
            interactiveChallenges: [
              {
                type: "quiz",
                title: "Thá»­ thÃ¡ch 1: Tráº¯c nghiá»‡m Quy táº¯c hÃ¬nh há»™p",
                question: "Cho hÃ¬nh há»™p $ABCD.A'B'C'D'$. Äáº³ng thá»©c vectÆ¡ nÃ o sau Ä‘Ã¢y lÃ  kháº³ng Ä‘á»‹nh ÄÃšNG?",
                options: [
                  "A. $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$",
                  "B. $\\vec{AC'} = \\vec{AB} + \\vec{BC} + \\vec{CD}$",
                  "C. $\\vec{AC'} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$",
                  "D. $\\vec{AC'} = \\vec{A'B'} + \\vec{A'D'} + \\vec{AC}$"
                ],
                correctIndex: 0,
                explanation: "Theo Quy táº¯c hÃ¬nh há»™p: VectÆ¡ Ä‘Æ°á»ng chÃ©o xuáº¥t phÃ¡t tá»« Ä‘á»‰nh A báº±ng tá»•ng ba vectÆ¡ xuáº¥t phÃ¡t tá»« Ä‘á»‰nh A trÃªn ba cáº¡nh ká»: AC' = AB + AD + AA'. Kháº³ng Ä‘á»‹nh A hoÃ n toÃ n chÃ­nh xÃ¡c!"
              },
              {
                type: "matching",
                title: "Thá»­ thÃ¡ch 2: GhÃ©p cáº·p cÃ´ng thá»©c vÃ  quy táº¯c toÃ¡n há»c khÃ´ng gian",
                instruction: "HÃ£y ghÃ©p má»—i cÃ´ng thá»©c á»Ÿ Cá»™t A vá»›i tÃªn quy táº¯c hÃ¬nh há»c khÃ´ng gian chuáº©n xÃ¡c nháº¥t á»Ÿ Cá»™t B:",
                pairs: [
                  { left: "AC' = AB + AD + AA'", right: "Quy táº¯c hÃ¬nh há»™p" },
                  { left: "u . v = 0", right: "Äiá»u kiá»‡n hai vectÆ¡ vuÃ´ng gÃ³c trong khÃ´ng gian" },
                  { left: "u . v = |u| . |v| . cos(u, v)", right: "CÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng trong khÃ´ng gian" },
                  { left: "AB + BC = AC", right: "Quy táº¯c ba Ä‘iá»ƒm" }
                ]
              },
              {
                type: "true_false",
                title: "Thá»­ thÃ¡ch 3: Kháº£o sÃ¡t ÄÃºng / Sai (Cáº¥u trÃºc thi tá»‘t nghiá»‡p THPT 2025)",
                instruction: "Cho hÃ¬nh láº­p phÆ°Æ¡ng $ABCD.A'B'C'D'$ cÃ³ cáº¡nh báº±ng $a$. XÃ©t tÃ­nh ÄÃºng/Sai cá»§a cÃ¡c má»‡nh Ä‘á» sau:",
                statements: [
                  { text: "a) Hai vectÆ¡ $\\vec{AB}$ vÃ  $\\vec{C'D'}$ lÃ  hai vectÆ¡ báº±ng nhau.", isTrue: false, explain: "Sai vÃ¬ AB vÃ  C'D' ngÆ°á»£c hÆ°á»›ng nhau (chÃºng lÃ  hai vectÆ¡ Ä‘á»‘i nhau)." },
                  { text: "b) TÃ­ch vÃ´ hÆ°á»›ng $\\vec{AB} \\cdot \\vec{AD} = 0$.", isTrue: true, explain: "ÄÃºng vÃ¬ ABCD lÃ  hÃ¬nh vuÃ´ng nÃªn AB vuÃ´ng gÃ³c AD, do Ä‘Ã³ tÃ­ch vÃ´ hÆ°á»›ng báº±ng 0." },
                  { text: "c) Äá»™ dÃ i cá»§a vectÆ¡ $\\vec{u} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ báº±ng $a\\sqrt{3}$.", isTrue: true, explain: "ÄÃºng vÃ¬ theo quy táº¯c hÃ¬nh há»™p u = AC', vÃ  Ä‘Æ°á»ng chÃ©o hÃ¬nh láº­p phÆ°Æ¡ng cáº¡nh a cÃ³ Ä‘á»™ dÃ i a cÄƒn 3." },
                  { text: "d) GÃ³c giá»¯a hai vectÆ¡ $\\vec{AA'}$ vÃ  $\\vec{BD}$ báº±ng $90^\\circ$.", isTrue: true, explain: "ÄÃºng vÃ¬ AA' vuÃ´ng gÃ³c vá»›i máº·t pháº³ng Ä‘Ã¡y (ABCD) nÃªn AA' vuÃ´ng gÃ³c vá»›i má»i Ä‘Æ°á»ng tháº³ng náº±m trong Ä‘Ã¡y, bao gá»“m cáº£ BD." }
                ]
              }
            ]
          },
          // BÃ i 7: Há»‡ trá»¥c toáº¡ Ä‘á»™ trong khÃ´ng gian (TÆ°Æ¡ng thÃ­ch 2 chiá»u vá»›i lesson-12-7-data.js)
          (function() {
            if (typeof window !== "undefined" && window.LESSON_12_C2_B7_DATA) {
              return window.LESSON_12_C2_B7_DATA;
            }
            return {
              id: "12-c2-b7",
              number: "BÃ i 7",
              title: "Há»‡ trá»¥c toáº¡ Ä‘á»™ trong khÃ´ng gian",
              sections: [
                {
                  id: "12-c2-b7-s1",
                  title: "1. Há»‡ trá»¥c toáº¡ Ä‘á»™ vÃ  toáº¡ Ä‘á»™ cá»§a Ä‘iá»ƒm trong khÃ´ng gian",
                  subsections: [
                    { id: "12-c2-b7-s1-a", title: "a) Há»‡ trá»¥c toáº¡ Ä‘á»™ Äá»-cÃ¡c vuÃ´ng gÃ³c trong khÃ´ng gian Oxyz", summary: "Ba trá»¥c Ox, Oy, Oz Ä‘Ã´i má»™t vuÃ´ng gÃ³c; ba vÃ©ctÆ¡ Ä‘Æ¡n vá»‹ i, j, k vÃ  cÃ¡c máº·t pháº³ng toáº¡ Ä‘á»™ (Oxy), (Oyz), (Ozx)." },
                    { id: "12-c2-b7-s1-b", title: "b) Toáº¡ Ä‘á»™ cá»§a má»™t Ä‘iá»ƒm trong khÃ´ng gian & Toáº¡ Ä‘á»™ hÃ¬nh chiáº¿u", summary: "OM = x.i + y.j + z.k <=> M(x; y; z). HoÃ nh Ä‘á»™ x, tung Ä‘á»™ y, cao Ä‘á»™ z. Toáº¡ Ä‘á»™ hÃ¬nh chiáº¿u vuÃ´ng gÃ³c lÃªn cÃ¡c trá»¥c vÃ  cÃ¡c máº·t pháº³ng toáº¡ Ä‘á»™." }
                  ]
                },
                {
                  id: "12-c2-b7-s2",
                  title: "2. Toáº¡ Ä‘á»™ cá»§a vÃ©ctÆ¡ trong khÃ´ng gian",
                  subsections: [
                    { id: "12-c2-b7-s2-a", title: "a) Äá»‹nh nghÄ©a toáº¡ Ä‘á»™ vÃ©ctÆ¡ vÃ  cÃ¡c vÃ©ctÆ¡ Ä‘áº·c biá»‡t", summary: "u = (x; y; z) <=> u = x.i + y.j + z.k. Toáº¡ Ä‘á»™ vÃ©ctÆ¡ i, j, k, 0. Äiá»u kiá»‡n hai vÃ©ctÆ¡ báº±ng nhau." },
                    { id: "12-c2-b7-s2-b", title: "b) LiÃªn há»‡ toáº¡ Ä‘á»™ Ä‘iá»ƒm vÃ  vÃ©ctÆ¡: VÃ©ctÆ¡ AB, Trung Ä‘iá»ƒm & Trá»ng tÃ¢m", summary: "AB = (xB - xA; yB - yA; zB - zA). Toáº¡ Ä‘á»™ trung Ä‘iá»ƒm M cá»§a AB. Toáº¡ Ä‘á»™ trá»ng tÃ¢m G cá»§a tam giÃ¡c ABC." }
                  ]
                }
              ]
            };
          })(),
          {
            id: "12-c2-b8",
            number: "BÃ i 8",
            title: "Biá»ƒu thá»©c toáº¡ Ä‘á»™ cá»§a cÃ¡c phÃ©p toÃ¡n vectÆ¡",
            sections: [
              {
                id: "12-c2-b8-s1",
                num: "1",
                title: "Biá»ƒu thá»©c toáº¡ Ä‘á»™ cÃ¡c phÃ©p toÃ¡n cÆ¡ báº£n",
                subsections: [
                  { key: "a", title: "Toáº¡ Ä‘á»™ tá»•ng, hiá»‡u vÃ  tÃ­ch vá»›i má»™t sá»‘", summary: "u Â± v = (xÂ±x'; yÂ±y'; zÂ±z'); k.u = (kx; ky; kz)." },
                  { key: "b", title: "Toáº¡ Ä‘á»™ trung Ä‘iá»ƒm vÃ  trá»ng tÃ¢m tá»© diá»‡n", summary: "Trung Ä‘iá»ƒm M((xA+xB)/2; (yA+yB)/2; (zA+zB)/2); trá»ng tÃ¢m tá»© diá»‡n G." }
                ]
              },
              {
                id: "12-c2-b8-s2",
                num: "2",
                title: "Biá»ƒu thá»©c toáº¡ Ä‘á»™ cá»§a tÃ­ch vÃ´ hÆ°á»›ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­ch vÃ´ hÆ°á»›ng vÃ  Ä‘á»™ dÃ i", summary: "u . v = x.x' + y.y' + z.z'; |u| = âˆš(xÂ² + yÂ² + zÂ²)." },
                  { key: "b", title: "Khoáº£ng cÃ¡ch giá»¯a hai Ä‘iá»ƒm vÃ  gÃ³c giá»¯a hai vectÆ¡", summary: "AB = âˆš((xB-xA)Â² + (yB-yA)Â² + (zB-zA)Â²); cos(u, v) = (u.v)/(|u|.|v|)." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-3",
        number: "ChÆ°Æ¡ng III",
        title: "CÃ¡c sá»‘ Ä‘áº·c trÆ°ng Ä‘o má»©c Ä‘á»™ phÃ¢n tÃ¡n cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
        volume: 1,
        volumeLabel: "Táº­p 1",
        lessons: [
          {
            id: "12-c3-b9",
            number: "BÃ i 9",
            title: "Khoáº£ng biáº¿n thiÃªn vÃ  khoáº£ng tá»© phÃ¢n vá»‹",
            sections: [
              {
                id: "12-c3-b9-s1",
                num: "1",
                title: "Khoáº£ng biáº¿n thiÃªn cá»§a máº«u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "KhÃ¡i niá»‡m vÃ  cÃ´ng thá»©c tÃ­nh R", summary: "R = Ä‘áº§u mÃºt pháº£i nhÃ³m cuá»‘i - Ä‘áº§u mÃºt trÃ¡i nhÃ³m Ä‘áº§u." },
                  { key: "b", title: "Ã nghÄ©a cá»§a khoáº£ng biáº¿n thiÃªn", summary: "ÄÃ¡nh giÃ¡ má»©c Ä‘á»™ táº£n máº¡n tá»•ng quÃ¡t cá»§a toÃ n bá»™ máº«u sá»‘ liá»‡u." }
                ]
              },
              {
                id: "12-c3-b9-s2",
                num: "2",
                title: "Khoáº£ng tá»© phÃ¢n vá»‹ cá»§a máº«u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh Î”Q = Q3 - Q1", summary: "Äá»™ dÃ i cá»§a khoáº£ng chá»©a 50% sá»‘ liá»‡u trung tÃ¢m." },
                  { key: "b", title: "Ã nghÄ©a vÃ  xÃ¡c Ä‘á»‹nh giÃ¡ trá»‹ ngoáº¡i lá»‡", summary: "KhÃ´ng bá»‹ áº£nh hÆ°á»Ÿng bá»Ÿi cÃ¡c giÃ¡ trá»‹ báº¥t thÆ°á»ng á»Ÿ hai biÃªn." }
                ]
              }
            ]
          },
          {
            id: "12-c3-b10",
            number: "BÃ i 10",
            title: "PhÆ°Æ¡ng sai vÃ  Ä‘á»™ lá»‡ch chuáº©n",
            sections: [
              {
                id: "12-c3-b10-s1",
                num: "1",
                title: "PhÆ°Æ¡ng sai cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh phÆ°Æ¡ng sai sÂ²", summary: "sÂ² = (1/n) âˆ‘ mi.(ci - xÌ„)Â² = (1/n) âˆ‘ mi.ciÂ² - xÌ„Â²." },
                  { key: "b", title: "Ã nghÄ©a thá»‘ng kÃª cá»§a phÆ°Æ¡ng sai", summary: "Äo Ä‘á»™ phÃ¢n tÃ¡n bÃ¬nh phÆ°Æ¡ng trung bÃ¬nh quanh sá»‘ trung bÃ¬nh máº«u." }
                ]
              },
              {
                id: "12-c3-b10-s2",
                num: "2",
                title: "Äá»™ lá»‡ch chuáº©n cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c tÃ­nh Ä‘á»™ lá»‡ch chuáº©n s = âˆš(sÂ²)", summary: "CÃ¹ng Ä‘Æ¡n vá»‹ Ä‘o vá»›i sá»‘ liá»‡u ban Ä‘áº§u, thuáº­n lá»£i cho viá»‡c so sÃ¡nh." },
                  { key: "b", title: "So sÃ¡nh Ä‘á»™ phÃ¢n tÃ¡n giá»¯a hai máº«u sá»‘ liá»‡u", summary: "Máº«u cÃ³ Ä‘á»™ lá»‡ch chuáº©n nhá» hÆ¡n thÃ¬ má»©c Ä‘á»™ á»•n Ä‘á»‹nh vÃ  Ä‘á»“ng Ä‘á»u cao hÆ¡n." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-4",
        number: "ChÆ°Æ¡ng IV",
        title: "NguyÃªn hÃ m vÃ  tÃ­ch phÃ¢n",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "12-c4-b11",
            number: "BÃ i 11",
            title: "NguyÃªn hÃ m",
            sections: [
              {
                id: "12-c4-b11-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m nguyÃªn hÃ m",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a nguyÃªn hÃ m vÃ  há» nguyÃªn hÃ m", summary: "F'(x) = f(x); há» nguyÃªn hÃ m âˆ« f(x)dx = F(x) + C." },
                  { key: "b", title: "TÃ­nh cháº¥t cÆ¡ báº£n cá»§a nguyÃªn hÃ m", summary: "âˆ« k f(x)dx = k âˆ« f(x)dx; âˆ« [f(x) Â± g(x)]dx = âˆ« f(x)dx Â± âˆ« g(x)dx." }
                ]
              },
              {
                id: "12-c4-b11-s2",
                num: "2",
                title: "Báº£ng nguyÃªn hÃ m vÃ  phÆ°Æ¡ng phÃ¡p tÃ­nh",
                subsections: [
                  { key: "a", title: "Báº£ng nguyÃªn hÃ m cá»§a cÃ¡c hÃ m sá»‘ cÆ¡ báº£n", summary: "NguyÃªn hÃ m hÃ m luá»¹ thá»«a, hÃ m mÅ©, hÃ m lÆ°á»£ng giÃ¡c." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p Ä‘á»•i biáº¿n sá»‘ vÃ  tá»«ng pháº§n", summary: "PhÆ°Æ¡ng phÃ¡p Ä‘áº·t t = u(x) vÃ  cÃ´ng thá»©c tÃ­ch phÃ¢n tá»«ng pháº§n âˆ« u dv = uv - âˆ« v du." }
                ]
              }
            ]
          },
          {
            id: "12-c4-b12",
            number: "BÃ i 12",
            title: "TÃ­ch phÃ¢n",
            sections: [
              {
                id: "12-c4-b12-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m tÃ­ch phÃ¢n",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a tÃ­ch phÃ¢n theo cÃ´ng thá»©c Newton-Leibniz", summary: "âˆ«_a^b f(x)dx = F(b) - F(a) = F(x)|_a^b." },
                  { key: "b", title: "Ã nghÄ©a hÃ¬nh há»c cá»§a tÃ­ch phÃ¢n", summary: "Diá»‡n tÃ­ch hÃ¬nh thang cong giá»›i háº¡n bá»Ÿi y = f(x) >= 0, y = 0, x = a, x = b." }
                ]
              },
              {
                id: "12-c4-b12-s2",
                num: "2",
                title: "TÃ­nh cháº¥t cá»§a tÃ­ch phÃ¢n vÃ  phÆ°Æ¡ng phÃ¡p tÃ­nh",
                subsections: [
                  { key: "a", title: "CÃ¡c tÃ­nh cháº¥t Ä‘áº¡i sá»‘", summary: "ChÃ¨n cáº­n âˆ«_a^b = âˆ«_a^c + âˆ«_c^b; Ä‘á»•i cáº­n âˆ«_a^b = -âˆ«_b^a; tÃ­ch phÃ¢n vá»›i há»‡ sá»‘." },
                  { key: "b", title: "PhÆ°Æ¡ng phÃ¡p Ä‘á»•i biáº¿n sá»‘ vÃ  tá»«ng pháº§n trong tÃ­ch phÃ¢n", summary: "Quy táº¯c Ä‘á»•i cáº­n khi Ä‘á»•i biáº¿n vÃ  cÃ´ng thá»©c tÃ­ch phÃ¢n tá»«ng pháº§n cÃ³ cáº­n." }
                ]
              }
            ]
          },
          {
            id: "12-c4-b13",
            number: "BÃ i 13",
            title: "á»¨ng dá»¥ng hÃ¬nh há»c cá»§a tÃ­ch phÃ¢n",
            sections: [
              {
                id: "12-c4-b13-s1",
                num: "1",
                title: "TÃ­nh diá»‡n tÃ­ch hÃ¬nh pháº³ng",
                subsections: [
                  { key: "a", title: "HÃ¬nh pháº³ng giá»›i háº¡n bá»Ÿi Ä‘á»“ thá»‹ vÃ  trá»¥c hoÃ nh", summary: "S = âˆ«_a^b |f(x)|dx; phÆ°Æ¡ng phÃ¡p phÃ¡ dáº¥u trá»‹ tuyá»‡t Ä‘á»‘i." },
                  { key: "b", title: "HÃ¬nh pháº³ng giá»›i háº¡n bá»Ÿi hai Ä‘Æ°á»ng cong", summary: "S = âˆ«_a^b |f(x) - g(x)|dx vÃ  bÃ i toÃ¡n tÃ¬m hoÃ nh Ä‘á»™ giao Ä‘iá»ƒm." }
                ]
              },
              {
                id: "12-c4-b13-s2",
                num: "2",
                title: "TÃ­nh thá»ƒ tÃ­ch váº­t thá»ƒ",
                subsections: [
                  { key: "a", title: "Thá»ƒ tÃ­ch váº­t thá»ƒ cÃ³ diá»‡n tÃ­ch thiáº¿t diá»‡n S(x)", summary: "V = âˆ«_a^b S(x)dx." },
                  { key: "b", title: "Thá»ƒ tÃ­ch khá»‘i trÃ²n xoay khi quay quanh trá»¥c Ox", summary: "V = Ï€ âˆ«_a^b [f(x)]Â²dx." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-5",
        number: "ChÆ°Æ¡ng V",
        title: "PhÆ°Æ¡ng phÃ¡p toáº¡ Ä‘á»™ trong khÃ´ng gian",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "12-c5-b14",
            number: "BÃ i 14",
            title: "PhÆ°Æ¡ng trÃ¬nh máº·t pháº³ng",
            sections: [
              {
                id: "12-c5-b14-s1",
                num: "1",
                title: "VectÆ¡ phÃ¡p tuyáº¿n cá»§a máº·t pháº³ng",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a vectÆ¡ phÃ¡p tuyáº¿n (VTPT)", summary: "VectÆ¡ n â‰  0 vuÃ´ng gÃ³c vá»›i má»i vectÆ¡ chá»‰ phÆ°Æ¡ng cá»§a máº·t pháº³ng." },
                  { key: "b", title: "Cáº·p vectÆ¡ chá»‰ phÆ°Æ¡ng vÃ  tÃ­ch cÃ³ hÆ°á»›ng", summary: "CÃ´ng thá»©c n = [u1, u2] vÃ  cÃ¡ch xÃ¡c Ä‘á»‹nh VTPT tá»« hai VTCP." }
                ]
              },
              {
                id: "12-c5-b14-s2",
                num: "2",
                title: "PhÆ°Æ¡ng trÃ¬nh tá»•ng quÃ¡t cá»§a máº·t pháº³ng",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh dáº¡ng Ax + By + Cz + D = 0", summary: "Máº·t pháº³ng Ä‘i qua M0(x0; y0; z0) cÃ³ VTPT n(A; B; C): A(x-x0) + B(y-y0) + C(z-z0) = 0." },
                  { key: "b", title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i cá»§a hai máº·t pháº³ng vÃ  khoáº£ng cÃ¡ch", summary: "Äiá»u kiá»‡n song song, trÃ¹ng, cáº¯t, vuÃ´ng gÃ³c vÃ  cÃ´ng thá»©c khoáº£ng cÃ¡ch tá»« Ä‘iá»ƒm Ä‘áº¿n máº·t pháº³ng." }
                ]
              }
            ]
          },
          {
            id: "12-c5-b15",
            number: "BÃ i 15",
            title: "PhÆ°Æ¡ng trÃ¬nh Ä‘Æ°á»ng tháº³ng trong khÃ´ng gian",
            sections: [
              {
                id: "12-c5-b15-s1",
                num: "1",
                title: "PhÆ°Æ¡ng trÃ¬nh tham sá»‘ vÃ  chÃ­nh táº¯c",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh tham sá»‘", summary: "x = x0 + at; y = y0 + bt; z = z0 + ct (t âˆˆ R) vá»›i VTCP u(a; b; c)." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh chÃ­nh táº¯c", summary: "(x - x0)/a = (y - y0)/b = (z - z0)/c khi a.b.c â‰  0." }
                ]
              },
              {
                id: "12-c5-b15-s2",
                num: "2",
                title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i trong khÃ´ng gian",
                subsections: [
                  { key: "a", title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a hai Ä‘Æ°á»ng tháº³ng", summary: "ChÃ©o nhau, cáº¯t nhau, song song, trÃ¹ng nhau báº±ng xÃ©t há»‡ phÆ°Æ¡ng trÃ¬nh toáº¡ Ä‘á»™." },
                  { key: "b", title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng", summary: "ÄÆ°á»ng tháº³ng song song, cáº¯t hoáº·c náº±m trong máº·t pháº³ng." }
                ]
              }
            ]
          },
          {
            id: "12-c5-b16",
            number: "BÃ i 16",
            title: "CÃ´ng thá»©c tÃ­nh gÃ³c trong khÃ´ng gian",
            sections: [
              {
                id: "12-c5-b16-s1",
                num: "1",
                title: "GÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c cÃ´sin gÃ³c giá»¯a hai Ä‘Æ°á»ng tháº³ng", summary: "cos Ï† = |u1 . u2| / (|u1| . |u2|)." },
                  { key: "b", title: "Äiá»u kiá»‡n hai Ä‘Æ°á»ng tháº³ng vuÃ´ng gÃ³c", summary: "u1 . u2 = 0 <=> a1.a2 + b1.b2 + c1.c2 = 0." }
                ]
              },
              {
                id: "12-c5-b16-s2",
                num: "2",
                title: "GÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c sin gÃ³c giá»¯a Ä‘Æ°á»ng tháº³ng vÃ  máº·t pháº³ng", summary: "sin Ï† = |u . n| / (|u| . |n|)." },
                  { key: "b", title: "Luyá»‡n táº­p bÃ i toÃ¡n gÃ³c", summary: "á»¨ng dá»¥ng giáº£i bÃ i toÃ¡n hÃ¬nh khá»‘i khÃ´ng gian toáº¡ Ä‘á»™ hoÃ¡." }
                ]
              },
              {
                id: "12-c5-b16-s3",
                num: "3",
                title: "GÃ³c giá»¯a hai máº·t pháº³ng",
                subsections: [
                  { key: "a", title: "CÃ´ng thá»©c cÃ´sin gÃ³c giá»¯a hai máº·t pháº³ng", summary: "cos Ï† = |n1 . n2| / (|n1| . |n2|)." },
                  { key: "b", title: "Äiá»u kiá»‡n hai máº·t pháº³ng vuÃ´ng gÃ³c", summary: "n1 . n2 = 0 <=> A1.A2 + B1.B2 + C1.C2 = 0." }
                ]
              }
            ]
          },
          {
            id: "12-c5-b17",
            number: "BÃ i 17",
            title: "PhÆ°Æ¡ng trÃ¬nh máº·t cáº§u",
            sections: [
              {
                id: "12-c5-b17-s1",
                num: "1",
                title: "Äá»‹nh nghÄ©a vÃ  phÆ°Æ¡ng trÃ¬nh máº·t cáº§u",
                subsections: [
                  { key: "a", title: "PhÆ°Æ¡ng trÃ¬nh chÃ­nh táº¯c tÃ¢m I(a; b; c) bÃ¡n kÃ­nh R", summary: "(x - a)Â² + (y - b)Â² + (z - c)Â² = RÂ²." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh dáº¡ng khai triá»ƒn", summary: "xÂ² + yÂ² + zÂ² - 2ax - 2by - 2cz + d = 0 vá»›i aÂ² + bÂ² + cÂ² - d > 0." }
                ]
              },
              {
                id: "12-c5-b17-s2",
                num: "2",
                title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i vÃ  máº·t pháº³ng tiáº¿p diá»‡n",
                subsections: [
                  { key: "a", title: "Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i giá»¯a máº·t pháº³ng vÃ  máº·t cáº§u", summary: "So sÃ¡nh d(I, (P)) vá»›i R: cáº¯t nhau theo Ä‘Æ°á»ng trÃ²n (d < R), tiáº¿p xÃºc (d = R), khÃ´ng cáº¯t (d > R)." },
                  { key: "b", title: "PhÆ°Æ¡ng trÃ¬nh máº·t pháº³ng tiáº¿p diá»‡n táº¡i Ä‘iá»ƒm thuá»™c máº·t cáº§u", summary: "(x0 - a)(x - x0) + (y0 - b)(y - y0) + (z0 - c)(z - z0) = 0." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-6",
        number: "ChÆ°Æ¡ng VI",
        title: "XÃ¡c suáº¥t cÃ³ Ä‘iá»u kiá»‡n vÃ  cÃ¡c quy táº¯c xÃ¡c suáº¥t",
        volume: 2,
        volumeLabel: "Táº­p 2",
        lessons: [
          {
            id: "12-c6-b18",
            number: "BÃ i 18",
            title: "XÃ¡c suáº¥t cÃ³ Ä‘iá»u kiá»‡n",
            sections: [
              {
                id: "12-c6-b18-s1",
                num: "1",
                title: "KhÃ¡i niá»‡m xÃ¡c suáº¥t cÃ³ Ä‘iá»u kiá»‡n",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a P(A|B)", summary: "P(A|B) = P(AB) / P(B) vá»›i P(B) > 0." },
                  { key: "b", title: "Quy táº¯c nhÃ¢n xÃ¡c suáº¥t tá»•ng quÃ¡t", summary: "P(AB) = P(B) . P(A|B) = P(A) . P(B|A)." }
                ]
              },
              {
                id: "12-c6-b18-s2",
                num: "2",
                title: "á»¨ng dá»¥ng xÃ¡c suáº¥t cÃ³ Ä‘iá»u kiá»‡n trong thá»±c táº¿",
                subsections: [
                  { key: "a", title: "Báº£ng phÃ¢n phá»‘i ngáº«u nhiÃªn hai chiá»u", summary: "PhÃ¢n tÃ­ch sá»‘ liá»‡u chÃ©o trong y táº¿, giÃ¡o dá»¥c, Ä‘iá»u tra dÃ¢n sá»‘." },
                  { key: "b", title: "BÃ i toÃ¡n kiá»ƒm tra y táº¿ vÃ  tá»‰ lá»‡ dÆ°Æ¡ng tÃ­nh giáº£", summary: "TÃ­nh xÃ¡c suáº¥t thá»±c sá»± máº¯c bá»‡nh khi cÃ³ káº¿t quáº£ xÃ©t nghiá»‡m dÆ°Æ¡ng tÃ­nh." }
                ]
              }
            ]
          },
          {
            id: "12-c6-b19",
            number: "BÃ i 19",
            title: "CÃ´ng thá»©c xÃ¡c suáº¥t toÃ n pháº§n vÃ  cÃ´ng thá»©c Bayes",
            sections: [
              {
                id: "12-c6-b19-s1",
                num: "1",
                title: "CÃ´ng thá»©c xÃ¡c suáº¥t toÃ n pháº§n",
                subsections: [
                  { key: "a", title: "Há»‡ biáº¿n cá»‘ Ä‘áº§y Ä‘á»§", summary: "Há»‡ cÃ¡c biáº¿n cá»‘ Ä‘Ã´i má»™t xung kháº¯c vÃ  cÃ³ há»£p báº±ng khÃ´ng gian máº«u Î©." },
                  { key: "b", title: "Äá»‹nh lÃ­ xÃ¡c suáº¥t toÃ n pháº§n", summary: "P(B) = P(A1).P(B|A1) + P(A2).P(B|A2) + ... + P(An).P(B|An)." }
                ]
              },
              {
                id: "12-c6-b19-s2",
                num: "2",
                title: "CÃ´ng thá»©c Bayes",
                subsections: [
                  { key: "a", title: "Äá»‹nh nghÄ©a vÃ  cÃ´ng thá»©c Bayes", summary: "P(Ai|B) = [P(Ai) . P(B|Ai)] / P(B) giÃºp cáº­p nháº­t xÃ¡c suáº¥t khi cÃ³ thÃªm thÃ´ng tin má»›i." },
                  { key: "b", title: "á»¨ng dá»¥ng trong phÃ¢n tÃ­ch dá»¯ liá»‡u vÃ  ra quyáº¿t Ä‘á»‹nh", summary: "Bá»™ lá»c thÆ° rÃ¡c (spam filter), cháº©n Ä‘oÃ¡n y khoa, Ä‘Ã¡nh giÃ¡ rá»§i ro tÃ i chÃ­nh." }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};

// Xuáº¥t ra pháº¡m vi toÃ n cá»¥c
if (typeof window !== "undefined") {
  window.LESSONS_DATABASE = LESSONS_DATABASE;

  // HÃ m tá»± Ä‘á»™ng káº¿t ná»‘i dá»¯ liá»‡u bÃ i há»c Ä‘á»™c láº­p vÃ o LESSONS_DATABASE
  function autoInjectLesson(lessonData) {
    if (!lessonData || !lessonData.id) return;
    for (var gradeKey in window.LESSONS_DATABASE) {
      var g = window.LESSONS_DATABASE[gradeKey];
      if (g && Array.isArray(g.chapters)) {
        for (var i = 0; i < g.chapters.length; i++) {
          var ch = g.chapters[i];
          if (ch && Array.isArray(ch.lessons)) {
            var idx = ch.lessons.findIndex(function(l) { return l.id === lessonData.id; });
            if (idx !== -1) {
              ch.lessons[idx] = lessonData;
              return;
            }
          }
        }
      }
    }
  }

  if (window.LESSON_10_C4_B7_DATA) autoInjectLesson(window.LESSON_10_C4_B7_DATA);
  if (window.LESSON_10_C4_B8_DATA) autoInjectLesson(window.LESSON_10_C4_B8_DATA);
  if (window.LESSON_11_C4_B11_DATA) autoInjectLesson(window.LESSON_11_C4_B11_DATA);
  if (window.LESSON_11_C4_B12_DATA) autoInjectLesson(window.LESSON_11_C4_B12_DATA);
  if (window.LESSON_12_C2_B6_DATA) autoInjectLesson(window.LESSON_12_C2_B6_DATA);
  if (window.LESSON_12_C2_B7_DATA) autoInjectLesson(window.LESSON_12_C2_B7_DATA);
}


