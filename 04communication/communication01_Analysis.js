// ===== communication01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Talking with friends is an important part of daily life.",
    "structure": "Gerund phrase + verb + complement",
    "grammar": "Cụm V-ing làm chủ ngữ.",
    "translation": "Trò chuyện với bạn bè là một phần quan trọng của cuộc sống hằng ngày.",
    "function": "Talking with friends (chủ ngữ); is (động từ/cụm động từ trung tâm); an important part of daily life (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Talking (gerund/verb); with (preposition); friends (noun); is (linking/auxiliary verb); an (article); important (adjective); part (noun); of (preposition); daily (adjective); life (noun).",
    "note": ""
  },
  {
    "sentence": "Good conversations help people understand each other better and build strong friendships.",
    "structure": "S + help(s) + O + V/complement",
    "grammar": "Cấu trúc help + tân ngữ + động từ/bổ ngữ.",
    "translation": "Những cuộc trò chuyện tốt giúp mọi người hiểu nhau hơn và xây dựng tình bạn bền chặt.",
    "function": "Good conversations (chủ ngữ); help (động từ/cụm động từ trung tâm); people understand each other better and build strong friendships (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Good (adjective); conversations (noun); help (verb); people (noun); understand (verb); each (determiner); other (pronoun); better (adverb); and (conjunction); build (verb); strong (adjective); friendships (noun).",
    "note": ""
  },
  {
    "sentence": "Friends can meet at school, in a park, at a café, or online.",
    "structure": "S + can + V + complement",
    "grammar": "Động từ khuyết thiếu can + động từ nguyên mẫu.",
    "translation": "Bạn bè có thể gặp nhau ở trường, trong công viên, tại quán cà phê hoặc trực tuyến.",
    "function": "Friends (chủ ngữ); can meet (động từ/cụm động từ trung tâm); at school in a park at a café or online (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Friends (noun); can (modal verb); meet (verb); at (preposition); school (noun); in (preposition); a (article); park (noun); at (preposition); a (article); café (noun); or (conjunction); online (adverb).",
    "note": ""
  },
  {
    "sentence": "People should speak politely, listen without interrupting, and support each other.",
    "structure": "S + should + V + complement",
    "grammar": "Động từ khuyết thiếu should + động từ nguyên mẫu.",
    "translation": "Mọi người nên nói chuyện lịch sự, lắng nghe mà không ngắt lời và hỗ trợ nhau.",
    "function": "People (chủ ngữ); should speak (động từ/cụm động từ trung tâm); politely listen without interrupting and support each other (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "People (noun); should (modal verb); speak (verb); politely (adverb); listen (verb); without (preposition); interrupting (gerund/verb); and (conjunction); support (verb); each (determiner); other (pronoun).",
    "note": ""
  },
  {
    "sentence": "Good first impressions can lead to new friendships and useful connections.",
    "structure": "S + can + V + complement",
    "grammar": "Động từ khuyết thiếu can + động từ nguyên mẫu.",
    "translation": "Ấn tượng đầu tiên tốt có thể dẫn đến những tình bạn mới và những mối liên hệ hữu ích.",
    "function": "Good first impressions (chủ ngữ); can lead (động từ/cụm động từ trung tâm); to new friendships and useful connections (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Good (adjective); first (adjective); impressions (noun); can (modal verb); lead (verb); to (preposition); new (adjective); friendships (noun); and (conjunction); useful (adjective); connections (noun).",
    "note": ""
  },
  {
    "sentence": "When meeting someone new, people usually introduce themselves first.",
    "structure": "When-clause + main clause",
    "grammar": "Mệnh đề thời gian với when.",
    "translation": "Khi gặp một người mới, mọi người thường tự giới thiệu trước.",
    "function": "When meeting someone new (mệnh đề/cụm trạng ngữ mở đầu); people usually (chủ ngữ mệnh đề chính); introduce (động từ trung tâm); themselves first (phần bổ sung của vị ngữ).",
    "pos": "When (conjunction); meeting (gerund/verb); someone (pronoun); new (adjective); people (noun); usually (adverb); introduce (verb); themselves (pronoun); first (adjective).",
    "note": ""
  },
  {
    "sentence": "Asking simple questions keeps the conversation interesting.",
    "structure": "Gerund phrase + verb + complement",
    "grammar": "Cụm V-ing làm chủ ngữ.",
    "translation": "Đặt những câu hỏi đơn giản giúp cuộc trò chuyện luôn thú vị.",
    "function": "Asking simple questions (chủ ngữ); keeps (động từ/cụm động từ trung tâm); the conversation interesting (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Asking (gerund/verb); simple (adjective); questions (noun); keeps (verb); the (article); conversation (noun); interesting (gerund/verb).",
    "note": ""
  },
  {
    "sentence": "Being polite and confident makes communication easier.",
    "structure": "Gerund phrase + verb + complement",
    "grammar": "Cụm V-ing làm chủ ngữ.",
    "translation": "Lịch sự và tự tin giúp việc giao tiếp trở nên dễ dàng hơn.",
    "function": "Being polite and confident (chủ ngữ); makes (động từ/cụm động từ trung tâm); communication easier (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Being (linking/auxiliary verb); polite (adjective); and (conjunction); confident (adjective); makes (verb); communication (noun); easier (adjective).",
    "note": ""
  },
  {
    "sentence": "Phone calls save time and allow people to share important information quickly, even when they are far apart.",
    "structure": "S + V + O/complement",
    "grammar": "Thì hiện tại đơn dùng để mô tả thói quen, sự thật hoặc hoạt động thường ngày.",
    "translation": "Các cuộc gọi điện thoại giúp tiết kiệm thời gian và cho phép mọi người chia sẻ thông tin quan trọng nhanh chóng, ngay cả khi họ ở xa nhau.",
    "function": "Phone calls (chủ ngữ); save (động từ/cụm động từ trung tâm); time and allow people to share important information quickly even when they are far apart (tân ngữ, bổ ngữ hoặc trạng ngữ cụ thể của vị ngữ).",
    "pos": "Phone (noun); calls (noun); save (verb); time (noun); and (conjunction); allow (verb); people (noun); to (infinitive marker); share (verb); important (adjective); information (noun); quickly (adverb); even (adverb); when (conjunction); they (pronoun); are (linking/auxiliary verb); far (adverb); apart (adverb).",
    "note": ""
  },
  {
    "sentence": "Before speaking, people usually greet each other politely.",
    "structure": "S + V + O/complement",
    "grammar": "Thì hiện tại đơn dùng để mô tả thói quen, sự thật hoặc hoạt động thường ngày.",
    "translation": "Trước khi nói chuyện, mọi người thường chào nhau một cách lịch sự.",
    "function": "Before speaking (mệnh đề/cụm trạng ngữ mở đầu); people usually (chủ ngữ mệnh đề chính); greet (động từ trung tâm); each other politely (phần bổ sung của vị ngữ).",
    "pos": "Before (preposition); speaking (gerund/verb); people (noun); usually (adverb); greet (verb); each (determiner); other (pronoun); politely (adverb).",
    "note": ""
  }
];
