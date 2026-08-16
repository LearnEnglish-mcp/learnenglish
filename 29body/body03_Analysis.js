const newAnalysisData = [
  {
    "sentence": "They include the small intestine and the large intestine.",
    "structure": "S + include + O",
    "grammar": "Dùng include để nói các bộ phận thuộc một nhóm.",
    "translation": "Chúng bao gồm ruột non và ruột già.",
    "function": "They (chủ ngữ); include (động từ chính); the small intestine and the large intestine (tân ngữ ghép).",
    "pos": "They (pronoun); include (verb); the (article); small (adjective); intestine (noun); and (conjunction); the (article); large (adjective); intestine (noun).",
    "note": ""
  },
  {
    "sentence": "The small intestine receives food from the stomach and absorbs most nutrients.",
    "structure": "S + V + O + and + V + O",
    "grammar": "Dùng hai động từ song song để mô tả chức năng.",
    "translation": "Ruột non nhận thức ăn từ dạ dày và hấp thụ phần lớn chất dinh dưỡng.",
    "function": "The small intestine (chủ ngữ); receives food from the stomach (vị ngữ thứ nhất); and absorbs most nutrients (vị ngữ thứ hai).",
    "pos": "The (article); small (adjective); intestine (noun); receives (verb); food (noun); from (preposition); the (article); stomach (noun); and (conjunction); absorbs (verb); most (determiner); nutrients (noun).",
    "note": ""
  },
  {
    "sentence": "These foods contain fiber, which helps waste move easily.",
    "structure": "noun, which + V",
    "grammar": "Dùng which để bổ nghĩa cho danh từ đứng trước.",
    "translation": "Những thực phẩm này chứa chất xơ, giúp chất thải di chuyển dễ dàng.",
    "function": "These foods (chủ ngữ); contain fiber (vị ngữ); which (đại từ quan hệ); helps waste move easily (mệnh đề quan hệ).",
    "pos": "These (pronoun); foods (noun); contain (verb); fiber (noun); which (relative pronoun); helps (verb); waste (noun); move (verb); easily (adverb).",
    "note": ""
  },
  {
    "sentence": "To protect the eyes, people should read in good light and rest after using screens.",
    "structure": "S + should + V",
    "grammar": "Dùng should để đưa ra lời khuyên.",
    "translation": "Để bảo vệ mắt, mọi người nên đọc ở nơi đủ sáng và nghỉ sau khi dùng màn hình.",
    "function": "To protect the eyes (cụm mục đích); people (chủ ngữ); should read in good light and rest after using screens (hai động từ với should).",
    "pos": "To (preposition); protect (verb); the (article); eyes (noun); people (pronoun); should (modal verb); read (verb); in (preposition); good (adjective); light (noun); and (conjunction); rest (verb); after (preposition); using (gerund); screens (noun).",
    "note": ""
  },
  {
    "sentence": "Looking far away for a short time can reduce tiredness.",
    "structure": "S + can + V",
    "grammar": "Dùng can để diễn tả khả năng hoặc tác dụng.",
    "translation": "Nhìn ra xa trong một khoảng thời gian ngắn có thể giảm mỏi mắt.",
    "function": "Looking far away for a short time (cụm V-ing làm chủ ngữ); can reduce (modal + động từ); tiredness (tân ngữ).",
    "pos": "Looking (gerund); far (adverb); away (adverb); for (preposition); a (article); short (adjective); time (noun); can (modal verb); reduce (verb); tiredness (noun).",
    "note": ""
  },
  {
    "sentence": "The pupils change size when the light becomes brighter or darker.",
    "structure": "S + V + O + when + clause",
    "grammar": "Dùng when để nói một thay đổi xảy ra trong một điều kiện.",
    "translation": "Đồng tử thay đổi kích thước khi ánh sáng trở nên sáng hơn hoặc tối hơn.",
    "function": "The pupils (chủ ngữ); change size (vị ngữ); when (liên từ); the light becomes brighter or darker (mệnh đề thời gian/điều kiện).",
    "pos": "The (article); pupils (noun); change (verb); size (noun); when (conjunction); the (article); light (noun); becomes (linking verb); brighter (comparative adjective); or (conjunction); darker (comparative adjective).",
    "note": ""
  },
  {
    "sentence": "Earphones should not be used at high volume for long periods.",
    "structure": "S + should + not + be + V3",
    "grammar": "Dùng should ở dạng bị động để đưa ra lời khuyên.",
    "translation": "Không nên sử dụng tai nghe ở âm lượng cao trong thời gian dài.",
    "function": "Earphones (chủ ngữ); should not be used (bị động với should); at high volume (cụm chỉ mức độ); for long periods (cụm thời gian).",
    "pos": "Earphones (noun); should (modal verb); not (adverb); be (linking/auxiliary verb); used (past participle); at (preposition); high (adjective); volume (noun); for (preposition); long (adjective); periods (noun).",
    "note": ""
  },
  {
    "sentence": "Signals then travel to the brain, where they become meaningful sounds.",
    "structure": "Noun, where + clause",
    "grammar": "Dùng where để nói nơi một quá trình xảy ra.",
    "translation": "Sau đó các tín hiệu truyền đến não, nơi chúng trở thành những âm thanh có ý nghĩa.",
    "function": "Signals (chủ ngữ); then (trạng từ); travel to the brain (vị ngữ); where they become meaningful sounds (mệnh đề quan hệ chỉ nơi).",
    "pos": "Signals (noun); then (adverb); travel (verb); to (preposition); the (article); brain (noun); where (relative adverb); they (pronoun); become (verb); meaningful (adjective); sounds (noun).",
    "note": ""
  },
  {
    "sentence": "Strong sunlight can damage the skin, so hats and sunscreen may provide protection.",
    "structure": "Clause, so + clause",
    "grammar": "Dùng so để nối nguyên nhân với kết quả.",
    "translation": "Ánh nắng mạnh có thể làm tổn thương da, vì vậy mũ và kem chống nắng có thể giúp bảo vệ.",
    "function": "Strong sunlight (chủ ngữ mệnh đề một); can damage the skin (vị ngữ); so (liên từ kết quả); hats and sunscreen may provide protection (mệnh đề kết quả).",
    "pos": "Strong (adjective); sunlight (noun); can (modal verb); damage (verb); the (article); skin (noun); so (conjunction); hats (noun); and (conjunction); sunscreen (noun); may (modal verb); provide (verb); protection (noun).",
    "note": ""
  },
  {
    "sentence": "The skin is the largest organ of the human body.",
    "structure": "S + be + the + superlative + noun",
    "grammar": "Dùng tính từ so sánh nhất để nói mức độ cao nhất.",
    "translation": "Da là cơ quan lớn nhất của cơ thể người.",
    "function": "The skin (chủ ngữ); is (động từ liên kết); the largest organ of the human body (bổ ngữ chủ ngữ với so sánh nhất).",
    "pos": "The (article); skin (noun); is (linking/auxiliary verb); the (article); largest (superlative adjective); organ (noun); of (preposition); the (article); human (adjective); body (noun).",
    "note": ""
  }
];
