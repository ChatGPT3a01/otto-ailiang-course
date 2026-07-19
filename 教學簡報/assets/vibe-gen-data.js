/* ============================================================
   OTTO 課程 · Vibe 逐段生成器資料檔
   每段 code 與原廠 Otto9 (V9) 函式庫語法一致：
   ‧ 疊完的完整 .ino 可直接貼進 3D 模擬器執行
   ‧ 也可直接在 Arduino IDE（裝 Libraries_V9）上傳真機
   段落以「三個空行」相接，順序 = 檔案由上到下。
   ============================================================ */
window.VIBE_GENERATORS = {

/* ---------- CH04 · 程式骨架 ---------- */
"ino_ch04": {
  "file": "otto_robot.ino",
  "title": "OTTO 程式骨架",
  "intro": "先把 OTTO 程式的「地基」蓋好：告訴程式馬達接在哪些腳位、開機要做什麼。之後每一章都是在這個骨架上換零件、加本事。",
  "goals": [
    {
      "title": "開頭：函式庫與腳位設定",
      "note": "程式的第一段：載入 OTTO 的能力包（函式庫），並告訴它每顆馬達接在哪支腳位。",
      "prompt": "我有一隻 OTTO 機器人（V9 版），想從最基礎開始教它。先幫我把它的「身體設定」寫成程式的開頭：\n‧ 它有兩條腿、兩隻腳掌，各由一顆小馬達控制（分別接在腳位 2、3、4、5）\n‧ 頭上有一對超音波感測器當眼睛（接腳位 8 和 9）\n‧ 還有一個蜂鳴器當它的嘴巴（接腳位 13）\n我完全是新手，每一行都請加上好懂的中文註解。",
      "code": "#include <Otto9.h>   // 載入 OTTO 的能力包（原廠 V9 函式庫）\nOtto9 Otto;          // 宣告一隻機器人，名字就叫 Otto\n\n// ===== 腳位設定：告訴程式每個零件接在哪支腳 =====\n#define PIN_YL 2       // 左腿伺服馬達 → 腳位 2\n#define PIN_YR 3       // 右腿伺服馬達 → 腳位 3\n#define PIN_RL 4       // 左腳伺服馬達 → 腳位 4\n#define PIN_RR 5       // 右腳伺服馬達 → 腳位 5\n#define PIN_Trigger 8  // 超音波發射（眼睛）→ 腳位 8\n#define PIN_Echo 9     // 超音波接收（眼睛）→ 腳位 9\n#define PIN_Buzzer 13  // 蜂鳴器（嘴巴）→ 腳位 13"
    },
    {
      "title": "setup()：開機只做一次的事",
      "note": "開機儀式：接通馬達、唱開機音效、立正站好。",
      "prompt": "接著幫我寫「開機時只做一次」的部分。我希望 OTTO 一開機就：\n‧ 先把全身的馬達和感測器都接通、準備好\n‧ 唱一小段開機音效跟大家問好\n‧ 然後站得直直的，等我下指令\n請加上清楚的中文註解。",
      "code": "// ===== setup()：開機時「只做一次」的事 =====\nvoid setup() {\n  // 接通所有零件（順序固定：四顆馬達、true、A6 噪音感測、蜂鳴器、超音波）\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 唱開機音效：登登登！\n  Otto.home();              // 立正站好，準備接受指令\n}"
    },
    {
      "title": "loop()：之後每章填本事的地方",
      "note": "loop() 會一直重複執行。現在先留空，之後每一章都在這裡教 OTTO 新本事。",
      "prompt": "最後幫我加上「會一直重複執行」的主程式區塊。這一章先讓它空著就好，但請在裡面加註解說明：這個區塊會一遍一遍不停地跑，之後 OTTO 學的新本事（走路、跳舞、避障…）都會寫在這裡。",
      "code": "// ===== loop()：跑完一遍就再跑一遍，永遠重複 =====\n// 之後每一章教的新本事（走路、跳舞、避障…）都寫在這裡\nvoid loop() {\n}"
    }
  ]
},

/* ---------- CH05 · 第一個動作 ---------- */
"ino_ch05": {
  "file": "otto_hello.ino",
  "title": "OTTO 的第一個動作",
  "intro": "讓 OTTO 開機打招呼：唱歌、揮手（抖腿版）、開心搖擺。你會第一次看到 loop() 一直重複的威力。",
  "goals": [
    {
      "title": "開頭與腳位（和 CH04 一樣）",
      "note": "每支 OTTO 程式的開頭都長一樣——這就是「骨架」的好處。",
      "prompt": "我要教 OTTO 一個新本事，程式叫 otto_hello。開頭一樣先介紹我的機器人：\n‧ 兩條腿、兩隻腳掌各一顆馬達（腳位 2、3、4、5）\n‧ 頭上超音波眼睛（腳位 8、9）\n‧ 蜂鳴器嘴巴（腳位 13）\n請幫我寫好程式開頭，加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器"
    },
    {
      "title": "setup()：開機儀式",
      "note": "接通零件、唱開機音效、立正。",
      "prompt": "幫我寫開機儀式：一開機就把馬達和感測器都接通、唱一段開機音效跟大家問好、然後立正站好。加中文註解。",
      "code": "void setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：每 3 秒打一次招呼",
      "note": "playGesture 是「動作＋音效」的組合表演；delay 讓 OTTO 休息一下再重來。",
      "prompt": "我想讓 OTTO 一直重複跟人打招呼，效果是這樣：\n‧ 先開心地扭動搖擺一下\n‧ 再舉手揮一揮打招呼\n‧ 然後停個三秒鐘，再從頭重複一次\n請加中文註解，並說明這件事會一直重複做。",
      "code": "void loop() {\n  Otto.playGesture(OttoHappy);  // 開心搖擺（動作＋音效一起來）\n  Otto.playGesture(OttoWave);   // 揮手打招呼（抖抖腿）\n  delay(3000);                  // 休息 3 秒（3000 毫秒）\n  // loop() 跑完會自動再跑一遍 → OTTO 每 3 秒打一次招呼！\n}"
    }
  ]
},

/* ---------- CH06 · 走路 ---------- */
"ino_ch06": {
  "file": "otto_walk.ino",
  "title": "OTTO 學走路",
  "intro": "Otto.walk(步數, 速度, 方向) 三個參數就能讓 OTTO 前進後退。這一章你會玩懂每個參數的意義。",
  "goals": [
    {
      "title": "開頭與 setup()（標準骨架）",
      "note": "骨架已經很熟了：開頭腳位＋開機儀式一次寫好。",
      "prompt": "我要教 OTTO 走路，程式叫 otto_walk。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13），以及開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：向前走、向後退",
      "note": "walk 的三個參數：步數、速度 T（600 快 ～ 1400 慢）、方向（1 前進 / -1 後退）。",
      "prompt": "我想讓 OTTO 表演走路，效果是這樣：\n‧ 先像散步一樣往前走幾步，走到我面前\n‧ 再倒退一點點回去\n‧ 然後開心地哼一段音\n‧ 停一下下，再從頭重複表演\n走的速度慢一點、看得清楚就好。請加中文註解，順便說明走幾步、走多快、往哪個方向是怎麼調的。",
      "code": "void loop() {\n  // Otto.walk(步數, 速度T, 方向)\n  //   速度 T：600（快）～ 1400（慢），數字越大走越慢\n  //   方向：1 = 向前，-1 = 向後\n  Otto.walk(4, 1000, 1);   // 向前走 4 步\n  Otto.walk(2, 1000, -1);  // 向後退 2 步\n  Otto.sing(S_happy);      // 唱一段開心的音\n  delay(1000);             // 休息 1 秒再重來\n}"
    }
  ]
},

/* ---------- CH07 · 轉彎與路線 ---------- */
"ino_ch07": {
  "file": "otto_route.ino",
  "title": "OTTO 的路線設計",
  "intro": "學會 turn 轉彎後，把 walk 和 turn 組合起來，就能設計一條完整路線——這章我們讓 OTTO 走出一個正方形！",
  "goals": [
    {
      "title": "開頭與 setup()（標準骨架）",
      "note": "一樣的骨架，直接生成。",
      "prompt": "我要讓 OTTO 走出一條路線，程式叫 otto_route。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：走一個正方形",
      "note": "「直走 → 左轉 90 度」做 4 次就是正方形。轉 90 度大約是 turn 3 步（模擬器裡可微調）。",
      "prompt": "我想讓 OTTO 走出一個正方形、繞一圈回到原點，效果是這樣：\n‧ 先往前走一小段\n‧ 停下來，向左轉大約 90 度\n‧「往前走一段 → 左轉」重複四次，剛好走成一個正方形回到起點\n‧ 回到起點後，開心地叫一聲慶祝\n‧ 停兩秒再重來\n這一章先用最直白的方式、一邊一邊寫出來（下一章會學到用迴圈偷懶）。走慢一點看得清楚，請加中文註解。",
      "code": "void loop() {\n  // Otto.turn(步數, 速度T, 方向)：1 = 左轉，-1 = 右轉\n  // 「直走 + 左轉」×4 = 正方形！\n  Otto.walk(3, 1000, 1);   // 第 1 邊：直走 3 步\n  Otto.turn(3, 1000, 1);   // 左轉（約 90 度）\n  Otto.walk(3, 1000, 1);   // 第 2 邊\n  Otto.turn(3, 1000, 1);   // 左轉\n  Otto.walk(3, 1000, 1);   // 第 3 邊\n  Otto.turn(3, 1000, 1);   // 左轉\n  Otto.walk(3, 1000, 1);   // 第 4 邊\n  Otto.turn(3, 1000, 1);   // 左轉，回到起點方向\n  Otto.sing(S_superHappy); // 走完一圈，慶祝！\n  delay(2000);             // 休息 2 秒再走一圈\n}"
    }
  ]
},

/* ---------- CH08 · 唱歌與手勢 ---------- */
"ino_ch08": {
  "file": "otto_show.ino",
  "title": "OTTO 的音效與手勢秀",
  "intro": "OTTO 內建 17 首音效和 13 種手勢表演。這章把最經典的串成一場「情緒小劇場」。",
  "goals": [
    {
      "title": "骨架（開頭＋setup）",
      "note": "標準骨架一段到位。",
      "prompt": "我要讓 OTTO 表演一場音效手勢秀，程式叫 otto_show。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}",
      "hint": "跟前幾章一樣的骨架。"
    },
    {
      "title": "loop()：情緒小劇場",
      "note": "音效（sing）配手勢（playGesture），演出一段有起承轉合的小劇。",
      "prompt": "我想讓 OTTO 演一段「情緒小劇場」，一幕一幕像這樣：\n‧ 開心：發出開心的聲音、開心地搖擺\n‧ 難過：發出難過的聲音、垂頭喪氣\n‧ 困惑：發出疑惑的聲音、東張西望\n‧ 最後勝利收尾：來個得意的勝利姿勢\n‧ 停兩秒再重演一次\n請加中文註解。",
      "code": "void loop() {\n  // 第一幕：開心\n  Otto.sing(S_happy);            // 開心音效\n  Otto.playGesture(OttoHappy);   // 開心搖擺\n\n  // 第二幕：難過\n  Otto.sing(S_sad);              // 難過音效\n  Otto.playGesture(OttoSad);     // 垂頭喪氣\n\n  // 第三幕：困惑\n  Otto.sing(S_confused);         // 困惑音效\n  Otto.playGesture(OttoConfused);// 東張西望\n\n  // 大結局：勝利！\n  Otto.playGesture(OttoVictory); // 勝利跳躍\n\n  delay(2000);                   // 謝幕休息 2 秒，再演一場\n}"
    }
  ]
},

/* ---------- CH09 · 進階舞步 ---------- */
"ino_ch09": {
  "file": "otto_dance.ino",
  "title": "OTTO 的進階舞步",
  "intro": "月球漫步、交叉步、拍翅、跳躍——這些舞步多了一個「高度 h」參數，幅度自己調。",
  "goals": [
    {
      "title": "骨架（開頭＋setup）",
      "note": "標準骨架。",
      "prompt": "我要讓 OTTO 跳進階舞步，程式叫 otto_dance。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：進階舞步大串連",
      "note": "moonwalker / crusaito / flapping 都是 (步數, 速度, 高度h, 方向)；jump 是 (次數, 速度)。",
      "prompt": "我想讓 OTTO 串一段比較厲害的舞，效果是這樣：\n‧ 先來個月球漫步，向左滑幾步、再向右滑回來\n‧ 接著跳交叉舞步\n‧ 然後像拍翅膀一樣擺動\n‧ 再上下律動幾下\n‧ 最後開心地跳一下、得意地唱一段\n‧ 停一下再重跳\n這些舞步的「幅度」可以調大調小，請在註解裡說明。動作幅度中等、看得清楚就好，加中文註解。",
      "code": "void loop() {\n  // 這些舞步多一個參數「高度 h」= 動作幅度（10 小 ～ 30 大）\n  Otto.moonwalker(3, 900, 25, 1);   // 月球漫步：向左滑 3 步\n  Otto.moonwalker(3, 900, 25, -1);  // 月球漫步：向右滑 3 步\n  Otto.crusaito(2, 1000, 20, 1);    // 交叉舞步 2 步\n  Otto.flapping(2, 1000, 20, 1);    // 拍翅舞 2 步\n  Otto.updown(2, 1200, 20);         // 上下運動 2 次\n  Otto.jump(1, 800);                // 跳一下！\n  Otto.sing(S_superHappy);          // 得意地唱一段\n  delay(1500);                      // 休息一下再跳\n}"
    }
  ]
},

/* ---------- CH10 · 自編舞蹈秀 ---------- */
"ino_ch10": {
  "file": "otto_myshow.ino",
  "title": "我的舞蹈秀",
  "intro": "把你會的所有本事——走位、舞步、音效、手勢——編成一場有「開場、主秀、謝幕」的完整表演。",
  "goals": [
    {
      "title": "骨架（開頭＋setup）",
      "note": "標準骨架。",
      "prompt": "我要編一場完整的舞蹈秀，程式叫 otto_myshow。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：三幕式舞蹈秀（老師示範版）",
      "note": "開場 → 主秀 → 謝幕。這是「範本」——迭代任務就是把它改成你的版本！",
      "prompt": "我想幫 OTTO 編一場有頭有尾的三幕舞蹈秀，像這樣：\n‧【開場】放段開場音樂、往前走兩步亮相、揮手跟大家打招呼\n‧【主秀】月球漫步左右各滑一下、左轉、跳段交叉舞步、右轉回正、上下律動幾下\n‧【謝幕】跳一下、擺個勝利姿勢、放段溫馨的音樂、往後退兩步鞠躬下台\n‧ 停三秒再重演\n請用註解標出三幕。這是老師的示範版，之後我會改成自己的版本。",
      "code": "void loop() {\n  // ===== 第一幕：開場亮相 =====\n  Otto.sing(S_mode3);              // 開場音效\n  Otto.walk(2, 1000, 1);           // 向前走 2 步亮相\n  Otto.playGesture(OttoWave);      // 揮手打招呼\n\n  // ===== 第二幕：主秀 =====\n  Otto.moonwalker(2, 900, 25, 1);  // 月球漫步向左\n  Otto.moonwalker(2, 900, 25, -1); // 月球漫步向右\n  Otto.turn(3, 1000, 1);           // 左轉一圈的 1/4\n  Otto.crusaito(2, 1000, 22, 1);   // 交叉舞步\n  Otto.turn(3, 1000, -1);          // 右轉回正\n  Otto.updown(2, 1100, 22);        // 上下律動\n\n  // ===== 第三幕：謝幕 =====\n  Otto.jump(1, 800);               // 跳躍收尾\n  Otto.playGesture(OttoVictory);   // 勝利姿勢\n  Otto.sing(S_cuddly);             // 溫馨謝幕曲\n  Otto.walk(2, 1000, -1);          // 後退鞠躬下台\n\n  delay(3000);                     // 中場休息，再演一場\n}"
    }
  ]
},

/* ---------- CH11 · Loop 工程專章 ---------- */
"ino_ch11": {
  "file": "otto_loops.ino",
  "title": "Loop 工程：for 迴圈的力量",
  "intro": "還記得 CH07 正方形寫了 8 行的痛苦嗎？for 迴圈讓「重複的事」一次寫好。程式會縮短，能力反而變強。",
  "goals": [
    {
      "title": "骨架（開頭＋setup）",
      "note": "標準骨架。",
      "prompt": "我要練習用迴圈讓程式變簡潔，程式叫 otto_loops。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：for 版正方形＋越跳越快",
      "note": "for (int i = 0; i < 4; i++) = 「重複 4 次」。還能用 i 讓每次不一樣！",
      "prompt": "上一章走正方形，我寫了好多行重複的動作，好累。這次我想用「重複做幾次」的方式讓程式變短，展現兩招：\n‧ 第一招【正方形升級版】：用「重複四次」的方式做「往前走一段、左轉」，把上次那一長串縮短\n‧ 第二招【越跳越快】：讓 OTTO 上下律動四次，而且一次比一次快\n‧ 最後開心唱一段、休息兩秒\n請在註解裡用白話解釋「重複幾次」是怎麼運作的，以及怎麼讓每一次都不一樣。",
      "code": "void loop() {\n  // for (起點; 繼續條件; 每圈變化) { 要重複的事 }\n  // i 從 0 開始，只要 i < 4 就繼續，每圈結束 i 加 1 → 共跑 4 次\n\n  // ===== 招式一：正方形 2.0（8 行變 4 行！）=====\n  for (int i = 0; i < 4; i++) {\n    Otto.walk(3, 1000, 1);   // 直走 3 步\n    Otto.turn(3, 1000, 1);   // 左轉 90 度\n  }\n\n  // ===== 招式二：越跳越快（用 i 改變速度）=====\n  for (int i = 0; i < 4; i++) {\n    Otto.updown(1, 1400 - i * 200, 20);  // 速度 1400→1200→1000→800\n  }\n\n  Otto.sing(S_superHappy);   // 完成！\n  delay(2000);\n}"
    }
  ]
},

/* ---------- CH12 · 超音波眼睛 ---------- */
"ino_ch12": {
  "file": "otto_eyes.ino",
  "title": "超音波眼睛：量距離",
  "intro": "Otto.getDistance() 會回報「前方的東西離我幾公分」。這章讓 OTTO 用聲音報告它看到的世界。",
  "goals": [
    {
      "title": "骨架（開頭＋setup）",
      "note": "標準骨架。",
      "prompt": "我要教 OTTO 用超音波眼睛量距離，程式叫 otto_eyes。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：用聲音報告距離",
      "note": "第一次用「變數」裝感測值，再用 if / else if 分三段反應。",
      "prompt": "我想讓 OTTO 用聲音報告它前面看到的東西有多近，像這樣：\n‧ 先量一下前方的距離\n‧ 如果非常近（不到 10 公分）：嚇一跳叫一聲，往後退一步\n‧ 如果有點近（10 到 25 公分）：發出「有東西喔」的警戒聲\n‧ 如果前方很空曠：發出輕快的聲音表示安全\n‧ 每量一次休息一秒\n請加中文註解，順便解釋一下怎麼把量到的距離記起來、以及「如果…不然如果…不然…」的判斷。",
      "code": "void loop() {\n  // 變數 = 幫資料取名字的盒子；把量到的距離裝進 distance\n  float distance = Otto.getDistance();   // 量距離（公分）\n\n  if (distance < 10) {\n    // 距離 < 10：太近了！\n    Otto.sing(S_surprise);      // 嚇一跳\n    Otto.walk(1, 1000, -1);     // 後退 1 步\n  } else if (distance < 25) {\n    // 10 ～ 25 之間：有東西靠近\n    Otto.sing(S_OhOoh);         // 「喔喔」警戒音\n  } else {\n    // 25 以上：前方淨空\n    Otto.sing(S_happy_short);   // 輕快短音\n  }\n\n  delay(1000);                  // 每秒量一次\n}"
    }
  ]
},

/* ---------- CH13 · 避障機器人 ---------- */
"ino_ch13": {
  "file": "otto_avoid.ino",
  "title": "避障機器人",
  "intro": "把「量距離」和「走路」合體：前方淨空就前進，太近就後退轉彎閃開——OTTO 第一次自己做決定。",
  "goals": [
    {
      "title": "骨架（開頭＋setup）",
      "note": "標準骨架。",
      "prompt": "我要讓 OTTO 學會自己閃避障礙物，程式叫 otto_avoid。先幫我把基礎打好——介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）和開機儀式（接通、唱開機音效、立正站好）。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\nvoid setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n}"
    },
    {
      "title": "loop()：避障邏輯",
      "note": "每走一步量一次距離：< 15 公分就執行「閃避劇本」。",
      "prompt": "我想讓 OTTO 一邊走一邊自己閃避障礙物，效果是這樣：\n‧ 先量一下前方距離\n‧ 如果前面很近（不到 15 公分）：嚇一跳叫一聲，往後退兩步，再左轉閃開\n‧ 如果前方沒東西：就往前走一步\n重點：一次只走一步，這樣它每走一步都會重新看一次前面，反應才快、不會撞上去。請把這個設計用註解說明清楚。",
      "code": "void loop() {\n  float distance = Otto.getDistance();   // 每圈先量一次距離\n\n  if (distance < 15) {\n    // 前面有東西！執行閃避劇本\n    Otto.sing(S_surprise);    // 驚訝：發現障礙物\n    Otto.walk(2, 1000, -1);   // 後退 2 步拉開距離\n    Otto.turn(3, 1000, 1);    // 左轉閃開\n  } else {\n    // 前方淨空，前進\n    Otto.walk(1, 1000, 1);    // 只走 1 步！\n    // 為什麼只走 1 步？因為 loop 馬上會再跑一圈、再量一次距離\n    // → 每走一步都重新確認，反應才快，不會一頭撞上\n  }\n}"
    }
  ]
},

/* ---------- CH14 · 互動行為設計 ---------- */
"ino_ch14": {
  "file": "otto_smart.ino",
  "title": "互動行為：像原廠工程師一樣寫",
  "intro": "學會三個進階武器：全域變數、bool 真假值、自訂函式——這正是原廠範例 Otto_avoid_V9 的寫法。",
  "goals": [
    {
      "title": "開頭＋全域變數",
      "note": "變數宣告在最上面（函式外面）＝「全域」，整支程式都能用。",
      "prompt": "我要寫一支比較進階的避障程式 otto_smart，想模仿原廠工程師的寫法。開頭一樣先介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13）。另外我想準備兩個「整支程式都記得住」的資訊：一個存前方的距離，一個是「有沒有遇到障礙物」的是非開關（一開始設成『沒有』）。請在註解用白話解釋這種「整支程式共用的記憶」和「是非開關」是什麼。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\n// ===== 全域變數：宣告在函式外面，整支程式都能用 =====\nint  distance;                  // 存量到的距離\nbool obstacleDetected = false;  // bool = 只有 true / false 兩種值的開關",
      "hint": "注意：這章開頭多了兩行全域變數。"
    },
    {
      "title": "setup()：開機儀式",
      "note": "跟之前一樣。",
      "prompt": "接著寫開機儀式：接通馬達和感測器、唱開機音效、立正站好，最後停半秒讓它穩定一下。加中文註解。",
      "code": "void setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n  Otto.sing(S_connection);  // 開機音效\n  Otto.home();              // 立正站好\n  delay(500);               // 穩定 0.5 秒\n}"
    },
    {
      "title": "loop()：看開關做事",
      "note": "loop 變乾淨了：只看 obstacleDetected 這個開關決定劇本。",
      "prompt": "我想讓 OTTO 的主程式只看「有沒有遇到障礙物」這個開關來決定要做什麼，像這樣：\n‧ 如果開關是「有障礙物」：嚇一跳叫一聲、嚇得跳一下、再安撫自己叫一聲，然後慢慢往後退三步、接著左轉幾次閃開\n‧ 如果開關是「沒障礙物」：就往前走一步，然後叫一個「偵測員」去看看前面有沒有東西（這個偵測員我下一段會寫）\n請加中文註解。",
      "code": "void loop() {\n  if (obstacleDetected) {\n    // 開關是 true → 執行閃避劇本（原廠同款！）\n    Otto.sing(S_surprise);            // 驚訝\n    Otto.jump(1, 500);                // 嚇得跳起來\n    Otto.sing(S_cuddly);              // 安撫自己\n    for (int i = 0; i < 3; i++) {\n      Otto.walk(1, 1300, -1);         // 慢慢後退 3 步\n    }\n    delay(500);\n    for (int i = 0; i < 3; i++) {\n      Otto.turn(1, 1000, 1);          // 左轉 3 次閃開\n      delay(500);\n    }\n  } else {\n    // 開關是 false → 正常前進\n    Otto.walk(1, 1000, 1);            // 走 1 步\n    obstacleDetector();               // 呼叫偵測員更新開關\n  }\n}"
    },
    {
      "title": "自訂函式：obstacleDetector()",
      "note": "把「量距離、更新開關」包成一個自己命名的函式——程式從此有了「分工」。",
      "prompt": "最後幫我做一個專門的「障礙物偵測員」小幫手，它負責：\n‧ 量一下前方距離、記起來\n‧ 如果距離很近（不到 15 公分），就把「有沒有障礙物」的開關打開；否則關上\n請在註解說明：把這件事包成一個有名字的小幫手有什麼好處（主程式更乾淨、想用的時候隨時可以叫它）。",
      "code": "// ===== 自訂函式：專職的「障礙物偵測員」=====\n// 好處：loop() 保持乾淨好讀；想偵測時隨時呼叫它\nvoid obstacleDetector() {\n  distance = Otto.getDistance();   // 量距離\n  if (distance < 15) {\n    obstacleDetected = true;       // 太近 → 開關打開\n  } else {\n    obstacleDetected = false;      // 安全 → 開關關上\n  }\n}"
    }
  ]
},

/* ---------- CH17 · 期末成果：整合範本 ---------- */
"ino_ch17": {
  "file": "otto_final.ino",
  "title": "期末成果：我的 OTTO 作品",
  "intro": "整學期的總和：開場秀＋智慧巡邏＋謝幕，一支程式全用上。這是老師的示範範本——你的任務是把它改造成「你的作品」。",
  "goals": [
    {
      "title": "開頭＋全域變數",
      "note": "CH14 的進階骨架。",
      "prompt": "這是我的期末作品 otto_final，要把整學期學的都用上。開頭先介紹我的機器人（兩條腿、兩隻腳掌各一顆馬達，接腳位 2、3、4、5；超音波眼睛接 8、9；蜂鳴器嘴巴接 13），再準備三個「整支程式都記得住」的資訊：一個存前方距離、一個是「有沒有障礙物」的開關、一個用來數它巡邏了幾圈。加中文註解。",
      "code": "#include <Otto9.h>   // OTTO 能力包\nOtto9 Otto;          // 我的機器人\n\n#define PIN_YL 2       // 左腿\n#define PIN_YR 3       // 右腿\n#define PIN_RL 4       // 左腳\n#define PIN_RR 5       // 右腳\n#define PIN_Trigger 8  // 超音波發射\n#define PIN_Echo 9     // 超音波接收\n#define PIN_Buzzer 13  // 蜂鳴器\n\n// ===== 全域變數 =====\nint  distance;                  // 距離感測值\nbool obstacleDetected = false;  // 障礙物開關\nint  rounds = 0;                // 巡邏圈數計數器"
    },
    {
      "title": "setup()：開場秀",
      "note": "開機就是一場表演——這段最歡迎改造成你的風格！",
      "prompt": "幫我寫開機時的一段開場秀：接通全身之後，放段開場音樂、往前走兩步亮相、揮手致意、月球漫步左右各滑一下、開心搖擺一下，最後立正站好準備開始巡邏。加中文註解。這段最歡迎我改成自己的風格。",
      "code": "void setup() {\n  Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n\n  // ===== 開場秀（改造成你的風格吧！）=====\n  Otto.sing(S_mode3);              // 開場音效\n  Otto.walk(2, 1000, 1);           // 向前亮相\n  Otto.playGesture(OttoWave);      // 揮手致意\n  Otto.moonwalker(2, 900, 25, 1);  // 月球漫步向左\n  Otto.moonwalker(2, 900, 25, -1); // 月球漫步向右\n  Otto.playGesture(OttoHappy);     // 開心搖擺\n  Otto.home();                     // 立正，準備開始巡邏\n}"
    },
    {
      "title": "loop()：智慧巡邏＋每 5 圈跳舞",
      "note": "避障巡邏（CH14）＋圈數計數（CH11 的變數活用）＝有個性的機器人。",
      "prompt": "我想讓 OTTO 一邊巡邏一邊有點個性，像這樣：\n‧ 如果遇到障礙物：嚇一跳叫一聲、往後退兩步、左轉閃開，然後把開關歸位\n‧ 如果沒遇到：往前走一步、叫偵測員看看前面、並把巡邏圈數加一\n‧ 每巡邏超過十圈：就擺個勝利姿勢加跳一下慶祝，然後圈數重新從零算\n請加中文註解。",
      "code": "void loop() {\n  if (obstacleDetected) {\n    // 遇到障礙物：閃避\n    Otto.sing(S_surprise);\n    Otto.walk(2, 1000, -1);        // 後退\n    Otto.turn(3, 1000, 1);         // 左轉閃開\n    obstacleDetected = false;      // 開關歸位\n  } else {\n    // 正常巡邏\n    Otto.walk(1, 1000, 1);\n    obstacleDetector();            // 更新障礙物開關\n    rounds = rounds + 1;           // 巡邏計數 +1\n  }\n\n  // 走滿 10 步就慶祝一下，展現個性！\n  if (rounds > 10) {\n    Otto.playGesture(OttoVictory); // 勝利手勢\n    Otto.jump(1, 800);             // 開心跳一下\n    rounds = 0;                    // 重新計數\n  }\n}"
    },
    {
      "title": "自訂函式：obstacleDetector()",
      "note": "跟 CH14 一樣的偵測員。",
      "prompt": "最後一樣加上「障礙物偵測員」小幫手：量前方距離記起來，距離很近（不到 15 公分）就把障礙物開關打開、否則關上。加中文註解。",
      "code": "// ===== 障礙物偵測員（CH14 學的）=====\nvoid obstacleDetector() {\n  distance = Otto.getDistance();\n  if (distance < 15) {\n    obstacleDetected = true;\n  } else {\n    obstacleDetected = false;\n  }\n}"
    }
  ]
}

};
