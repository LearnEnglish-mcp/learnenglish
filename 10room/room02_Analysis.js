// ===== room02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "The dining room is between the kitchen and the living room.",
    "structure": "S + be + place phrase",
    "grammar": "Dùng be với cụm chỉ nơi chốn để mô tả vị trí.",
    "translation": "Phòng ăn nằm giữa nhà bếp và phòng khách.",
    "function": "Chủ ngữ (căn phòng); be (động từ liên kết); cụm giới từ chỉ vị trí (bổ ngữ cho chủ ngữ).",
    "pos": "The (article); dining (adjective); room (noun); is (linking verb); between (preposition); the (article); kitchen (noun); and (conjunction); the (article); living (adjective); room (noun).",
    "note": ""
  },
  {
    "sentence": "It has a large dining table, several chairs, a cupboard, and a light above the table.",
    "structure": "S + have/has + object",
    "grammar": "Dùng have/has để liệt kê đồ vật có trong một căn phòng.",
    "translation": "Phòng có một bàn ăn lớn, vài chiếc ghế, một chiếc tủ và một chiếc đèn phía trên bàn.",
    "function": "Chủ ngữ (đối tượng được mô tả); has (động từ chính); các cụm danh từ sau has (tân ngữ liệt kê đồ vật trong phòng).",
    "pos": "It (pronoun); has (verb); a (article); large (adjective); dining (adjective); table (noun); several (determiner); chairs (noun); a (article); cupboard (noun); and (conjunction); a (article); light (noun); above (preposition); the (article); table (noun).",
    "note": ""
  },
  {
    "sentence": "We also put some flowers in the middle of the table.",
    "structure": "S + also + V",
    "grammar": "Dùng also để thêm một thông tin hoặc hành động tương tự.",
    "translation": "Chúng tôi cũng đặt một ít hoa ở giữa bàn.",
    "function": "Chủ ngữ (người thực hiện); also (trạng từ bổ sung ý); động từ chính; tân ngữ/cụm giới từ nêu vật và vị trí.",
    "pos": "We (pronoun); also (adverb); put (verb); some (determiner); flowers (noun); in (preposition); the (article); middle (adjective); of (preposition); the (article); table (noun).",
    "note": ""
  },
  {
    "sentence": "My family usually has breakfast and dinner together in this room.",
    "structure": "S + usually + V",
    "grammar": "Dùng usually để nói thói quen thường xuyên.",
    "translation": "Gia đình tôi thường ăn sáng và ăn tối cùng nhau trong căn phòng này.",
    "function": "Chủ ngữ (người thực hiện); trạng từ tần suất (mức độ thường xuyên); động từ chính (hoạt động); cụm còn lại bổ sung thời gian/nơi chốn.",
    "pos": "My (determiner); family (adverb); usually (adverb); has (verb); breakfast (noun); and (conjunction); dinner (noun); together (adverb); in (preposition); this (determiner); room (noun).",
    "note": ""
  },
  {
    "sentence": "We try not to use our phones while eating.",
    "structure": "while + V-ing",
    "grammar": "Dùng while + V-ing để nói hai hoạt động xảy ra cùng lúc.",
    "translation": "Chúng tôi cố gắng không dùng điện thoại khi đang ăn.",
    "function": "Mệnh đề chính (hành động chính); while + V-ing (cụm trạng ngữ chỉ hành động đồng thời).",
    "pos": "We (pronoun); try (verb); not (adverb); to (preposition); use (verb); our (determiner); phones (noun); while (conjunction); eating (verb).",
    "note": ""
  },
  {
    "sentence": "I enjoy spending time in the dining room because family meals are important.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để giải thích lý do.",
    "translation": "Tôi thích dành thời gian trong phòng ăn vì những bữa cơm gia đình rất quan trọng.",
    "function": "Mệnh đề trước because (ý chính); because (liên từ chỉ nguyên nhân); mệnh đề sau because (lý do giải thích cho ý chính).",
    "pos": "I (pronoun); enjoy (verb); spending (verb); time (noun); in (preposition); the (article); dining (adjective); room (noun); because (conjunction); family (adverb); meals (noun); are (linking verb); important (adjective).",
    "note": ""
  },
  {
    "sentence": "A clean and comfortable dining room makes every meal more enjoyable and meaningful.",
    "structure": "S + make(s) + O + adjective",
    "grammar": "Dùng make + tân ngữ + tính từ để nói điều gì làm cho sự vật trở nên như thế nào.",
    "translation": "Một phòng ăn sạch sẽ và thoải mái làm cho mỗi bữa ăn thú vị và ý nghĩa hơn.",
    "function": "Chủ ngữ (nguyên nhân); makes (động từ chính); object (đối tượng chịu tác động); adjective phrase (bổ ngữ mô tả kết quả).",
    "pos": "A (article); clean (adjective); and (conjunction); comfortable (adjective); dining (adjective); room (noun); makes (verb); every (determiner); meal (noun); more (determiner); enjoyable (adjective); and (conjunction); meaningful (adjective).",
    "note": ""
  },
  {
    "sentence": "It is not very large, but it is clean and useful.",
    "structure": "S + be + not + adjective + but + adjective",
    "grammar": "Dùng not ... but ... để đối lập hai đặc điểm.",
    "translation": "Nó không quá lớn nhưng sạch sẽ và hữu ích.",
    "function": "Chủ ngữ + be (khung mô tả); not very large (đặc điểm bị phủ định); but (liên từ tương phản); clean and useful (đặc điểm được khẳng định).",
    "pos": "It (pronoun); is (linking verb); not (adverb); very (adverb); large (adjective); but (conjunction); it (pronoun); is (linking verb); clean (adjective); and (conjunction); useful (adjective).",
    "note": ""
  },
  {
    "sentence": "After using it, I always turn off the water and keep the floor dry.",
    "structure": "After + V-ing, S + V",
    "grammar": "Dùng after + V-ing để nói một việc xảy ra sau một việc khác.",
    "translation": "Sau khi sử dụng, tôi luôn khóa nước và giữ sàn khô ráo.",
    "function": "After + V-ing (cụm trạng ngữ chỉ thời gian); chủ ngữ (người thực hiện); các động từ chính song song (hành động xảy ra sau).",
    "pos": "After (preposition); using (verb); it (pronoun); I (pronoun); always (adverb); turn (verb); off (adverb); the (article); water (noun); and (conjunction); keep (verb); the (article); floor (noun); dry (adjective).",
    "note": ""
  },
  {
    "sentence": "A peaceful study room can help people work better and learn new things every day.",
    "structure": "S + can + V",
    "grammar": "Dùng can để nói khả năng hoặc tác dụng có thể có.",
    "translation": "Một phòng học yên bình có thể giúp mọi người làm việc tốt hơn và học những điều mới mỗi ngày.",
    "function": "Chủ ngữ (sự vật); can (động từ khuyết thiếu); help (động từ chính); object + bare infinitive (người và hành động được hỗ trợ).",
    "pos": "A (article); peaceful (adjective); study (verb); room (noun); can (modal verb); help (verb); people (noun); work (noun); better (adverb); and (conjunction); learn (verb); new (adjective); things (noun); every (determiner); day (noun).",
    "note": ""
  }
];
