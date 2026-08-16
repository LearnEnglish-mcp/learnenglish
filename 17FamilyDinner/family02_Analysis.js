// ===== family02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "A healthy family meal provides the nutrients that the body needs.",
    "structure": "Noun + that + clause",
    "grammar": "Dùng that để bổ nghĩa cho danh từ đứng trước.",
    "translation": "Một bữa ăn gia đình lành mạnh cung cấp các chất dinh dưỡng mà cơ thể cần.",
    "function": "A healthy family meal (chủ ngữ); provides (động từ); the nutrients (tân ngữ); that the body needs (mệnh đề quan hệ bổ nghĩa cho nutrients).",
    "pos": "A (article); healthy (adjective); family (noun); meal (noun); provides (verb); the (article); nutrients (noun); that (conjunction); the (article); body (noun); needs (verb).",
    "note": ""
  },
  {
    "sentence": "Families should try to eat fresh foods instead of too much fast food.",
    "structure": "S + should + V",
    "grammar": "Dùng should để đưa ra lời khuyên.",
    "translation": "Các gia đình nên cố gắng ăn thực phẩm tươi thay vì quá nhiều thức ăn nhanh.",
    "function": "Families (chủ ngữ); should try (cụm modal + động từ); to eat fresh foods (cụm to-infinitive); instead of too much fast food (cụm đối chiếu lựa chọn).",
    "pos": "Families (noun); should (modal verb); try (verb); to (preposition); eat (verb); fresh (adjective); foods (noun); instead (preposition); of (preposition); too (adverb); much (determiner); fast (adjective); food (noun).",
    "note": ""
  },
  {
    "sentence": "Fresh ingredients contain vitamins and minerals that help people stay strong and active.",
    "structure": "S + V + O + that + help + O + V",
    "grammar": "Dùng help + tân ngữ + động từ nguyên mẫu để nói sự hỗ trợ.",
    "translation": "Nguyên liệu tươi chứa vitamin và khoáng chất giúp mọi người khỏe mạnh và năng động.",
    "function": "Fresh ingredients (chủ ngữ); contain (động từ); vitamins and minerals (tân ngữ); that help people stay strong and active (mệnh đề quan hệ bổ nghĩa cho vitamins and minerals).",
    "pos": "Fresh (adjective); ingredients (noun); contain (verb); vitamins (noun); and (conjunction); minerals (noun); that (conjunction); help (verb); people (noun); stay (verb); strong (adjective); and (conjunction); active (adjective).",
    "note": ""
  },
  {
    "sentence": "When parents choose healthy foods, children learn to make better food choices.",
    "structure": "When + clause, main clause",
    "grammar": "Dùng when để nói điều xảy ra trong một tình huống.",
    "translation": "Khi cha mẹ chọn thực phẩm lành mạnh, trẻ em học cách đưa ra lựa chọn thực phẩm tốt hơn.",
    "function": "When parents choose healthy foods (mệnh đề thời gian/điều kiện); children (chủ ngữ mệnh đề chính); learn (động từ); to make better food choices (cụm to-infinitive).",
    "pos": "When (conjunction); parents (noun); choose (verb); healthy (adjective); foods (noun); children (noun); learn (verb); to (preposition); make (verb); better (adjective); food (noun); choices (noun).",
    "note": ""
  },
  {
    "sentence": "The dinner table is a place where families can communicate.",
    "structure": "Noun + where + clause",
    "grammar": "Dùng where để bổ nghĩa cho một địa điểm.",
    "translation": "Bàn ăn là nơi các gia đình có thể giao tiếp.",
    "function": "The dinner table (chủ ngữ); is (động từ liên kết); a place (bổ ngữ); where families can communicate (mệnh đề quan hệ chỉ nơi chốn).",
    "pos": "The (article); dinner (noun); table (noun); is (linking/auxiliary verb); a (article); place (noun); where (conjunction); families (noun); can (modal verb); communicate (verb).",
    "note": ""
  },
  {
    "sentence": "While eating, family members often talk about their daily experiences, plans, and ideas.",
    "structure": "While + V-ing, main clause",
    "grammar": "Dùng while + V-ing để nói hai hành động diễn ra cùng lúc.",
    "translation": "Trong khi ăn, các thành viên gia đình thường nói về những trải nghiệm, kế hoạch và ý tưởng hằng ngày của mình.",
    "function": "While eating (cụm thời gian rút gọn); family members (chủ ngữ); often talk (động từ); about their daily experiences, plans, and ideas (cụm giới từ nêu chủ đề).",
    "pos": "While (conjunction); eating (verb); family (noun); members (noun); often (adverb); talk (verb); about (preposition); their (possessive determiner); daily (adjective); experiences (noun); plans (noun); and (conjunction); ideas (noun).",
    "note": ""
  },
  {
    "sentence": "Parents can ask children about school and their friends.",
    "structure": "S + can + V",
    "grammar": "Dùng can để nói khả năng hoặc hành động có thể thực hiện.",
    "translation": "Cha mẹ có thể hỏi trẻ về trường học và bạn bè.",
    "function": "Parents (chủ ngữ); can ask (modal + động từ); children (tân ngữ); about school and their friends (cụm giới từ nêu chủ đề).",
    "pos": "Parents (noun); can (modal verb); ask (verb); children (noun); about (preposition); school (noun); and (conjunction); their (possessive determiner); friends (noun).",
    "note": ""
  },
  {
    "sentence": "Listening carefully shows respect and helps build stronger relationships.",
    "structure": "V-ing phrase + V + object",
    "grammar": "Dùng cụm V-ing làm chủ ngữ của câu.",
    "translation": "Lắng nghe cẩn thận thể hiện sự tôn trọng và giúp xây dựng các mối quan hệ bền chặt hơn.",
    "function": "Listening carefully (cụm V-ing làm chủ ngữ); shows respect (vị ngữ thứ nhất); and helps build stronger relationships (vị ngữ thứ hai).",
    "pos": "Listening (verb); carefully (adverb); shows (verb); respect (noun); and (conjunction); helps (verb); build (verb); stronger (adjective); relationships (noun).",
    "note": ""
  },
  {
    "sentence": "Family members usually sit together and share the dishes placed in the center of the table.",
    "structure": "Noun + V + noun + past-participle phrase",
    "grammar": "Dùng phân từ quá khứ để bổ nghĩa cho danh từ.",
    "translation": "Các thành viên gia đình thường ngồi cùng nhau và chia sẻ những món ăn được đặt ở giữa bàn.",
    "function": "Family members (chủ ngữ); usually sit together and share (hai động từ song song); the dishes (tân ngữ); placed in the center of the table (cụm phân từ quá khứ bổ nghĩa cho dishes).",
    "pos": "Family (noun); members (noun); usually (adverb); sit (verb); together (adverb); and (conjunction); share (verb); the (article); dishes (noun); placed (verb); in (preposition); the (article); center (noun); of (preposition); the (article); table (noun).",
    "note": ""
  },
  {
    "sentence": "They bring people together and help preserve cultural values.",
    "structure": "S + help + V + object",
    "grammar": "Dùng help + động từ nguyên mẫu để nói tác dụng.",
    "translation": "Chúng mang mọi người lại gần nhau và giúp gìn giữ các giá trị văn hóa.",
    "function": "They (chủ ngữ); bring people together (vị ngữ thứ nhất); and help preserve cultural values (vị ngữ thứ hai với help + bare infinitive).",
    "pos": "They (noun); bring (verb); people (noun); together (adverb); and (conjunction); help (verb); preserve (verb); cultural (adjective); values (noun).",
    "note": ""
  }
];
