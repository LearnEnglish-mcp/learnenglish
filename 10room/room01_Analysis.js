// ===== room01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "The living room is an important place in my house.",
    "structure": "S + be + complement",
    "grammar": "Dùng hiện tại đơn với be để mô tả một nơi hoặc sự vật.",
    "translation": "Phòng khách là một nơi quan trọng trong ngôi nhà của tôi.",
    "function": "The living room (chủ ngữ); is (động từ liên kết); an important place (bổ ngữ cho chủ ngữ); in my house (cụm giới từ chỉ nơi chốn).",
    "pos": "The (article); living (adjective); room (noun); is (linking verb); an (article); important (adjective); place (noun); in (preposition); my (determiner); house (noun).",
    "note": ""
  },
  {
    "sentence": "There is a sofa, a television, a coffee table, and some family pictures on the wall.",
    "structure": "There is + singular noun + place",
    "grammar": "Dùng There is để nói có một đồ vật hoặc sự vật ở một nơi.",
    "translation": "Có một chiếc ghế sofa, một chiếc tivi, một bàn trà và một số ảnh gia đình trên tường.",
    "function": "There is/are (cấu trúc tồn tại); cụm danh từ theo sau (đối tượng được giới thiệu); cụm chỉ nơi chốn/mục đích (bổ sung vị trí hoặc công dụng).",
    "pos": "There (adverb); is (linking verb); a (article); sofa (noun); a (article); television (noun); a (article); coffee (noun); table (noun); and (conjunction); some (determiner); family (adverb); pictures (noun); on (preposition); the (article); wall (noun).",
    "note": ""
  },
  {
    "sentence": "My family often spends time together in this room.",
    "structure": "S + adverb of frequency + V",
    "grammar": "Dùng trạng từ tần suất để nói một hoạt động xảy ra thường xuyên đến mức nào.",
    "translation": "Gia đình tôi thường dành thời gian cùng nhau trong căn phòng này.",
    "function": "Chủ ngữ (người thực hiện); trạng từ tần suất (mức độ thường xuyên); động từ chính (hoạt động); cụm còn lại bổ sung thời gian/nơi chốn.",
    "pos": "My (determiner); family (adverb); often (adverb); spends (verb); time (noun); together (adverb); in (preposition); this (determiner); room (noun).",
    "note": ""
  },
  {
    "sentence": "We watch television, talk about our day, listen to music, or welcome visitors.",
    "structure": "S + V1, V2, V3, or V4",
    "grammar": "Dùng các động từ song song để liệt kê nhiều hoạt động của cùng một chủ ngữ.",
    "translation": "Chúng tôi xem tivi, trò chuyện về một ngày của mình, nghe nhạc hoặc đón khách.",
    "function": "Chủ ngữ chung (người thực hiện); chuỗi động từ song song nối bằng dấu phẩy và or (các hoạt động); các tân ngữ/cụm giới từ bổ sung cho từng động từ.",
    "pos": "We (pronoun); watch (verb); television (noun); talk (verb); about (preposition); our (determiner); day (noun); listen (verb); to (preposition); music (noun); or (conjunction); welcome (verb); visitors (noun).",
    "note": ""
  },
  {
    "sentence": "I like the living room because it is comfortable and friendly.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để nêu lý do cho một cảm xúc hoặc hành động.",
    "translation": "Tôi thích phòng khách vì nó thoải mái và thân thiện.",
    "function": "Mệnh đề trước because (ý chính); because (liên từ chỉ nguyên nhân); mệnh đề sau because (lý do giải thích cho ý chính).",
    "pos": "I (pronoun); like (verb); the (article); living (adjective); room (noun); because (conjunction); it (pronoun); is (linking verb); comfortable (adjective); and (conjunction); friendly (adverb).",
    "note": ""
  },
  {
    "sentence": "It is located upstairs, next to the bathroom.",
    "structure": "S + be + located + place",
    "grammar": "Dùng be located để nói vị trí của một căn phòng hoặc địa điểm.",
    "translation": "Nó nằm ở tầng trên, cạnh phòng tắm.",
    "function": "Chủ ngữ (căn phòng); be + located (cụm vị ngữ chỉ vị trí); cụm giới từ theo sau (nơi chốn cụ thể).",
    "pos": "It (pronoun); is (linking verb); located (adjective); upstairs (adverb); next (adjective); to (preposition); the (article); bathroom (noun).",
    "note": ""
  },
  {
    "sentence": "Before going to sleep, I prepare my clothes for the next day and put my phone away.",
    "structure": "Before + V-ing, S + V",
    "grammar": "Dùng before + V-ing để nói một việc xảy ra trước một việc khác.",
    "translation": "Trước khi đi ngủ, tôi chuẩn bị quần áo cho ngày hôm sau và cất điện thoại sang một bên.",
    "function": "Before + V-ing (cụm trạng ngữ chỉ thời gian); mệnh đề chính (hành động xảy ra sau); các tân ngữ/cụm bổ sung làm rõ hành động.",
    "pos": "Before (preposition); going (verb); to (preposition); sleep (verb); I (pronoun); prepare (verb); my (determiner); clothes (noun); for (preposition); the (article); next (adjective); day (noun); and (conjunction); put (verb); my (determiner); phone (noun); away (adverb).",
    "note": ""
  },
  {
    "sentence": "I also open the window to get some fresh air.",
    "structure": "S + V + to + V",
    "grammar": "Dùng to + động từ nguyên mẫu để diễn tả mục đích.",
    "translation": "Tôi cũng mở cửa sổ để đón không khí trong lành.",
    "function": "Chủ ngữ (người thực hiện); động từ chính (hành động); to + động từ nguyên mẫu (cụm chỉ mục đích); tân ngữ/bổ ngữ (nội dung mục đích).",
    "pos": "I (pronoun); also (adverb); open (verb); the (article); window (noun); to (preposition); get (verb); some (determiner); fresh (adjective); air (noun).",
    "note": ""
  },
  {
    "sentence": "It has a refrigerator, a cooker, a sink, some cupboards, and many cooking tools.",
    "structure": "S + have/has + object",
    "grammar": "Dùng have/has để nói một căn phòng có những đồ vật nào.",
    "translation": "Nó có tủ lạnh, bếp nấu, bồn rửa, một số tủ đựng đồ và nhiều dụng cụ nấu ăn.",
    "function": "Chủ ngữ (đối tượng được mô tả); has (động từ chính); các cụm danh từ sau has (tân ngữ liệt kê đồ vật trong phòng).",
    "pos": "It (pronoun); has (verb); a (article); refrigerator (noun); a (article); cooker (noun); a (article); sink (noun); some (determiner); cupboards (noun); and (conjunction); many (determiner); cooking (verb); tools (noun).",
    "note": ""
  },
  {
    "sentence": "We should always keep the kitchen clean and safe after preparing food.",
    "structure": "S + should + V",
    "grammar": "Dùng should để đưa ra lời khuyên hoặc điều nên làm.",
    "translation": "Chúng ta nên luôn giữ nhà bếp sạch sẽ và an toàn sau khi chuẩn bị thức ăn.",
    "function": "Chủ ngữ (người nhận lời khuyên); should (động từ khuyết thiếu); các động từ nguyên mẫu theo sau (hành động được khuyên làm); tân ngữ/trạng ngữ bổ sung chi tiết.",
    "pos": "We (pronoun); should (modal verb); always (adverb); keep (verb); the (article); kitchen (noun); clean (adjective); and (conjunction); safe (adjective); after (preposition); preparing (verb); food (noun).",
    "note": ""
  }
];
