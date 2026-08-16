// ===== room03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "The guest room is located on the ground floor, near the bathroom.",
    "structure": "S + be + located + place",
    "grammar": "Dùng be located để mô tả vị trí.",
    "translation": "Phòng dành cho khách nằm ở tầng trệt, gần phòng tắm.",
    "function": "Chủ ngữ (căn phòng); be + located (cụm vị ngữ chỉ vị trí); cụm giới từ theo sau (nơi chốn cụ thể).",
    "pos": "The (article); guest (noun); room (noun); is (linking verb); located (adjective); on (preposition); the (article); ground (noun); floor (noun); near (preposition); the (article); bathroom (noun).",
    "note": ""
  },
  {
    "sentence": "There are also clean blankets, pillows, and towels for visitors.",
    "structure": "There are + plural noun + place",
    "grammar": "Dùng There are để nói có nhiều đồ vật ở một nơi.",
    "translation": "Ngoài ra còn có chăn, gối và khăn sạch dành cho khách.",
    "function": "There is/are (cấu trúc tồn tại); cụm danh từ theo sau (đối tượng được giới thiệu); cụm chỉ nơi chốn/mục đích (bổ sung vị trí hoặc công dụng).",
    "pos": "There (adverb); are (linking verb); also (adverb); clean (adjective); blankets (noun); pillows (noun); and (conjunction); towels (noun); for (preposition); visitors (noun).",
    "note": ""
  },
  {
    "sentence": "When relatives or friends stay at our house, they sleep in this room.",
    "structure": "When + clause, main clause",
    "grammar": "Dùng when để nói một tình huống và điều xảy ra trong tình huống đó.",
    "translation": "Khi người thân hoặc bạn bè ở lại nhà chúng tôi, họ ngủ trong căn phòng này.",
    "function": "When + mệnh đề phụ (điều kiện/thời điểm); mệnh đề chính (kết quả hoặc hành động xảy ra khi điều kiện đó có).",
    "pos": "When (conjunction); relatives (noun); or (conjunction); friends (noun); stay (verb); at (preposition); our (determiner); house (noun); they (pronoun); sleep (verb); in (preposition); this (determiner); room (noun).",
    "note": ""
  },
  {
    "sentence": "Before they arrive, my family cleans the room, changes the bedsheets, and prepares some drinking water.",
    "structure": "Before + clause, main clause",
    "grammar": "Dùng before để nói một hành động xảy ra trước hành động khác.",
    "translation": "Trước khi họ đến, gia đình tôi dọn phòng, thay ga giường và chuẩn bị một ít nước uống.",
    "function": "Before + mệnh đề phụ (thời điểm trước); mệnh đề chính (các hành động chuẩn bị); các động từ nối bằng and (chuỗi hành động).",
    "pos": "Before (preposition); they (pronoun); arrive (verb); my (determiner); family (adverb); cleans (verb); the (article); room (noun); changes (verb); the (article); bedsheets (noun); and (conjunction); prepares (verb); some (determiner); drinking (adjective); water (noun).",
    "note": ""
  },
  {
    "sentence": "We want our guests to feel welcome.",
    "structure": "S + want + O + to + V",
    "grammar": "Dùng want + tân ngữ + to-infinitive để nói mong muốn ai đó làm hoặc cảm thấy điều gì.",
    "translation": "Chúng tôi muốn khách cảm thấy được chào đón.",
    "function": "Chủ ngữ (người mong muốn); want (động từ chính); object (người được hướng tới); to + verb + complement (điều mong muốn).",
    "pos": "We (pronoun); want (verb); our (determiner); guests (noun); to (preposition); feel (verb); welcome (verb).",
    "note": ""
  },
  {
    "sentence": "It contains a washing machine, some baskets, detergent, clothes hangers, and cleaning tools.",
    "structure": "S + contain(s) + object",
    "grammar": "Dùng contain để nói một nơi hoặc vật chứa những gì.",
    "translation": "Phòng có máy giặt, vài chiếc giỏ, chất giặt tẩy, móc quần áo và dụng cụ vệ sinh.",
    "function": "Chủ ngữ (căn phòng); contains (động từ chính); các cụm danh từ sau đó (tân ngữ liệt kê đồ vật bên trong).",
    "pos": "It (pronoun); contains (verb); a (article); washing (verb); machine (noun); some (determiner); baskets (noun); detergent (noun); clothes (noun); hangers (noun); and (conjunction); cleaning (adjective); tools (noun).",
    "note": ""
  },
  {
    "sentence": "We separate white clothes from colored clothes before washing them.",
    "structure": "Before + V-ing, S + V",
    "grammar": "Dùng before + V-ing để nói việc cần làm trước một hành động khác.",
    "translation": "Chúng tôi tách quần áo trắng khỏi quần áo màu trước khi giặt.",
    "function": "Before + V-ing (cụm trạng ngữ chỉ thời gian); mệnh đề chính (hành động xảy ra sau); các tân ngữ/cụm bổ sung làm rõ hành động.",
    "pos": "We (pronoun); separate (verb); white (adjective); clothes (noun); from (preposition); colored (adjective); clothes (noun); before (preposition); washing (verb); them (pronoun).",
    "note": ""
  },
  {
    "sentence": "We should store cleaning products safely and keep them away from children.",
    "structure": "S + should + V",
    "grammar": "Dùng should để đưa ra lời khuyên về an toàn và tổ chức.",
    "translation": "Chúng ta nên cất các sản phẩm vệ sinh an toàn và để chúng xa trẻ em.",
    "function": "Chủ ngữ (người nhận lời khuyên); should (động từ khuyết thiếu); các động từ nguyên mẫu theo sau (hành động được khuyên làm); tân ngữ/trạng ngữ bổ sung chi tiết.",
    "pos": "We (pronoun); should (modal verb); store (verb); cleaning (adjective); products (noun); safely (adverb); and (conjunction); keep (verb); them (pronoun); away (adverb); from (preposition); children (noun).",
    "note": ""
  },
  {
    "sentence": "It is a small room where my family keeps things that we do not use every day.",
    "structure": "noun + where + clause",
    "grammar": "Dùng where để tạo mệnh đề quan hệ chỉ nơi chốn.",
    "translation": "Đây là một căn phòng nhỏ nơi gia đình tôi cất những thứ mà chúng tôi không dùng hằng ngày.",
    "function": "Mệnh đề chính giới thiệu căn phòng; where (trạng từ quan hệ chỉ nơi chốn); mệnh đề quan hệ mô tả việc gia đình làm trong căn phòng.",
    "pos": "It (pronoun); is (linking verb); a (article); small (adjective); room (noun); where (conjunction); my (determiner); family (adverb); keeps (verb); things (noun); that (determiner); we (pronoun); do (verb); not (adverb); use (verb); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "The garage protects our vehicles from rain, sunlight, and theft.",
    "structure": "S + protect(s) + O + from + noun",
    "grammar": "Dùng protect ... from ... để nói bảo vệ ai hoặc vật khỏi một nguy cơ.",
    "translation": "Ga-ra bảo vệ các phương tiện của chúng tôi khỏi mưa, ánh nắng và trộm cắp.",
    "function": "Chủ ngữ (vật bảo vệ); protects (động từ chính); object (đối tượng được bảo vệ); from + danh từ (nguồn nguy cơ).",
    "pos": "The (article); garage (noun); protects (verb); our (determiner); vehicles (noun); from (preposition); rain (noun); sunlight (noun); and (conjunction); theft (noun).",
    "note": ""
  }
];
