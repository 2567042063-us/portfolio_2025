export default function Kuaican() {
  return (
    <table className="ztai__table">
      <caption>
        话题：有的人认为吃快餐 既省时间又方便，也有的人认为吃快餐不但
        没营养也不好吃，你的看法呢？
        <br />
        <small>
          Có người cho rằng ăn đồ ăn nhanh vừa tiết kiệm thời gian vừa tiện lợi,
          người khác lại nghĩ rằng đồ ăn nhanh ko nhưng ko dinh dưỡng mà còn
          không ngon.
          <br />
          Quan điểm của bạn thế nào?
        </small>
      </caption>
      <thead>
        <tr>
          <th>Role</th>
          <th style={{ width: "40%" }}>汉语</th>
          <th>Pinyin</th>
          <th>Tiếng Việt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">
            庄姐，十二点了，我们一起去吃炸鸡吧！附近新开了一家快餐店，听说他们家的蒜香黄油炸鸡特别好吃。
          </td>
          <td className="ztai__py">
            Zhuāng jiě, shí'èr diǎn le, wǒmen yìqǐ qù chī zhájī ba! Fùjìn xīn
            kāi le yì jiā kuàicān diàn, tīngshuō tāmen jiā de suànxiāng huángyóu
            zhájī tèbié hǎochī.
          </td>
          <td>
            Chị Trang ơi, 12h rồi, chúng ta cùng đi ăn gà rán đi! Gần đây mới mở
            một cửa hàng thức ăn nhanh, nghe nói món gà rán sốt bơ tỏi của quán
            đặc biệt ngon!
          </td>
        </tr>
        <tr>
          <td>小庄</td>
          <td className="ztai__zh">
            哎哟，又吃快餐啊？你最近怎么老是吃快餐？我觉得快餐
            <span className="text-cyan-700">没什么营养，味道也很一般</span>。
          </td>
          <td className="ztai__py">
            Āiyō, yòu chī kuàicān a? Nǐ zuìjìn zěnme lǎoshì chī kuàicān? Wǒ
            juéde kuàicān{" "}
            <span className="text-cyan-700">
              méi shénme yíngyǎng, wèidào yě hěn yìbān
            </span>
            .
          </td>
          <td>
            Ui, lại ăn fastfood nữa à? Sao dạo này em hay ăn fastfood vậy? Chị
            thấy fastfood chẳng có dinh dưỡng mà vị cũng bình thường.
          </td>
        </tr>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">
            可是，吃快餐<span className="text-cyan-700">既省时间又方便</span>
            啊！每天工作那么忙，中午休息时间只有一小时。去快餐店点完餐，两分钟就能拿到，吃完以后，还可以休息一会儿。
          </td>
          <td className="ztai__py">
            Kěshì, chī kuàicān jì shěng shíjiān yòu fāngbiàn a! Měitiān gōngzuò
            nàme máng, zhōngwǔ xiūxi shíjiān zhǐ yǒu yì xiǎoshí. Qù kuàicān diàn
            diǎn wán cān, liǎng fēnzhōng jiù néng ná dào, chī wán yǐhòu, hái
            kěyǐ xiūxi yíhuìr.
          </td>
          <td>
            Nhưng ăn fastfood vừa tiết kiệm thời gian vừa tiện mà! Ngày nào công
            việc cũng bận như vậy, giờ nghỉ trưa chỉ có một tiếng. Đến quán gọi
            món xong, hai phút là có đồ ăn, ăn xong vẫn có thể nghỉ ngơi một
            lát.
          </td>
        </tr>
        <tr>
          <td>小庄</td>
          <td className="ztai__zh">
            炸鸡用的都是冷冻鸡肉，有什么好吃的啊？不光是冷冻鸡肉，牛肉也是冷冻的，薯条也是冷冻切好的……全都是
            <span className="text-cyan-700">冷冻食品</span>。
          </td>
          <td className="ztai__py">
            Zhájī yòng de dōu shì lěngdòng jīròu, yǒu shénme hǎochī de a?
            Bùguāng shì lěngdòng jīròu, niúròu yě shì lěngdòng de, shǔtiáo yě
            shì lěngdòng qiē hǎo de…… quán dōu shì lěngdòng shípǐn.
          </td>
          <td>
            Gà rán toàn dùng thịt gà đông lạnh, có gì ngon đâu? Ko chỉ gà đông
            lạnh, thịt bò cũng đông lạnh, khoai tây chiên cũng được cắt sẵn rồi
            cấp đông.... toàn đồ đông lạnh thôi.
          </td>
        </tr>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">
            嗯，每家店的食材保存方法不一样吧！听说这家店的炸鸡做得很好，应该不会有冷冻的味道。
          </td>
          <td className="ztai__py">
            Èn, měi jiā diàn de shícái bǎocún fāngfǎ bù yíyàng ba! Tīngshuō zhè
            jiā diàn de zhájī zuò de hěn hǎo, yīnggāi bú huì yǒu lěngdòng de
            wèidào.
          </td>
          <td>
            Uhh, cách bảo quản nguyên liệu của mỗi quán khác nhau mà! Nghe nói
            gà rán của quán này làm ngon lắm, chắc là không có mùi thịt đông
            lạnh đâu.
          </td>
        </tr>
        <tr>
          <td>小庄</td>
          <td className="ztai__zh">
            快餐来来去去就那么几种：汉堡包、披萨、意大利面、炸鸡，吃来吃去都
            <span className="text-cyan-700">吃腻了</span>。
          </td>
          <td className="ztai__py">
            Kuàicān láilái-qùqù jiù nàme jǐ zhǒng: hànbǎobāo, pīsà, Yìdàlì miàn,
            zhájī, chī lái chī qù dōu chī nì le.
          </td>
          <td>
            Fastfood quanh đi quẩn lại chỉ có vài món: hamburger, pizza, mì Ý,
            gà rán, ăn hoài cũng ngán.
          </td>
        </tr>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">
            现在很多快餐店都有很多菜，也有不少健康的。光是沙拉就有好多种选择。
          </td>
          <td className="ztai__py">
            Xiànzài hěn duō kuàicān diàn dōu yǒu hěn duō cài, yě yǒu bù shǎo
            jiànkāng de. Guāng shì shālā jiù yǒu hǎo duō zhǒng xuǎnzé.
          </td>
          <td>
            Giờ mấy quán fastfood có rất nhiều món, cũng có nhiều món healthy
            mà. Chỉ riêng salad thui cũng có rất nhiều lựa chọn.
            <br />
            (好多选择 thui cũng dc)
          </td>
        </tr>
        <tr>
          <td>小庄</td>
          <td className="ztai__zh">
            不过我觉得快餐还是不太健康，一般都
            <span className="text-cyan-700">高油高盐</span>
            ，吃多了很容易让人发胖。
          </td>
          <td className="ztai__py">
            Búguò wǒ juéde kuàicān háishi bú tài jiànkāng, yìbān dōu gāo yóu gāo
            yán, chī duō le hěn róngyì ràng rén fāpàng.
          </td>
          <td>
            Nhưng chị thấy fastfood không được lành mạnh lắm, đa phần đều nhiều
            dầu nhiều muối, ăn nhiều dễ mập lắm.
          </td>
        </tr>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">
            我知道呀，可它既方便，又好吃得不得了！只要炸鸡一端上来，哇那真的是香味扑鼻，让人一看就想吃了。那时候所有的烦恼就都烟消云散啦。
          </td>
          <td className="ztai__py">
            Wǒ zhīdào ya, kě tā jì fāngbiàn, yòu hǎochī de bùdéliǎo! Zhǐyào
            zhájī yì duān shànglai, wā nà zhēn de shì xiāngwèi pū bí, ràng rén
            yí kàn jiù xiǎng chī le. Nà shíhou suǒyǒu de fánnǎo jiù dōu
            yānxiāo-yúnsàn la.
          </td>
          <td>
            Em biết mà, nhưng nó vừa tiện, lại ngon ko chịu nổi! Chỉ cần gà rán
            bưng ra, ôi nó thơm nức mũi, nhìn là đã muốn ăn. Lúc đó mọi muộn
            phiền đều tan biến.
          </td>
        </tr>
        <tr>
          <td>小庄</td>
          <td className="ztai__zh">
            你觉得好吃啊？现代生活节奏快，快餐确实方便，但我们还是要
            <span className="text-cyan-700">多注意饮食健康</span>
            ，好好照顾身体……我喜欢自己在家做好饭带着，或者去家常菜馆吃，菜多，营养也全。
          </td>
          <td className="ztai__py">
            Nǐ juéde hǎochī a? Xiàndài shēnghuó jiézòu kuài, kuàicān quèshí
            fāngbiàn, dàn wǒmen háishi yào duō zhùyì yǐnshí jiànkāng, hǎohāo
            zhàogù shēntǐ…… Wǒ xǐhuan zìjǐ zài jiā zuò hǎo fàn dàizhe, huòzhě qù
            jiācháng cài guǎn chī, cài duō, yíngyǎng yě quán.
          </td>
          <td>
            Em thấy nó ngon à, với lại cuộc sống hiện đại hối hả thì nó khá tiện
            lợi, nhưng chúng ta cũng cần chú ý ăn uống lành mạnh, chăm sóc tốt
            cho sức khỏe… Chị thích nấu cơm ở nhà mang theo hay đến quán cơm gia
            đình có đầy đủ món, đầy đủ dinh dưỡng.
          </td>
        </tr>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">
            好的，姐，我听你的。不过，偶尔吃一次也没关系嘛。那今天中午呢？要不你跟我一起去这家店尝尝，好不好？
          </td>
          <td className="ztai__py">
            Hǎo de, jiě, wǒ tīng nǐ de. Búguò, ǒu'ěr chī yí cì yě méi guānxi ma.
            Nà jīntiān zhōngwǔ ne? Yàobù nǐ gēn wǒ yìqǐ qù zhè jiā diàn
            chángchang, hǎo bu hǎo?
          </td>
          <td>
            Dạ, em nghe lời chị, nhưng lâu lâu ăn cũng ko sao mà. Thế trưa nay
            thì sao? Hay chị đi thử quán này với em đi.
          </td>
        </tr>
        <tr>
          <td>小庄</td>
          <td className="ztai__zh">
            今天嘛……要不就去打卡那家新开的店吧，我也想尝一尝你说的这几样。
          </td>
          <td className="ztai__py">
            Jīntiān ma…… yàobù jiù qù dǎkǎ nà jiā xīn kāi de diàn ba, wǒ yě
            xiǎng chángyicháng nǐ shuō de zhè jǐ yàng.
          </td>
          <td>
            Hôm nay thì…… thôi đi quán mới mở đó đi, chị cũng muốn thử mấy món
            em nói.
          </td>
        </tr>
        <tr>
          <td>明英</td>
          <td className="ztai__zh">好嘞，走起吧！</td>
          <td className="ztai__py">Hǎo lei, zǒuqǐ ba!</td>
          <td>Được, mình đi thôi.</td>
        </tr>
      </tbody>
    </table>
  );
}
