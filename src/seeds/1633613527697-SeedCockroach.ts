import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1633613527697 implements MigrationInterface {
  name = 'SeedDb1633613527697';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tales"
       (slug, title, description, couplets, artist) VALUES
       (
         'cockroach', 'тараканище', 'веселая сказка про таракана', '[
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606246/cockroach/1_cockroach_izufxk.png", "https://res.cloudinary.com/nephewfedor/image/upload/v1633606246/cockroach/2_cockroach_lysrtv.png"],
              "text": ["Тараканище"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606246/cockroach/3_cockroach_oigw3o.png"],
              "text": ["Часть первая:", "Ехали медведи", "На велосипеде.", "А за ними кот", "Задом наперед."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/4_cockroach_laead5.png"],
              "text": ["А за ним комарики", "На воздушном шарике.", "А за ними раки", "На хромой собаке."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606246/cockroach/5_cockroach_nrqrzq.png"],
              "text": ["Волки на кобыле."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606246/cockroach/6_cockroach_w3dkiq.png"],
              "text": ["Львы в автомобиле."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/7_cockroach_hnl6jl.png"],
              "text": ["Зайчики", "В трамвайчикею", "Жаба на метле..."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/8_cockroach_iahory.png"],
              "text": ["Едут и смеются,", "Пряники жуют."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/9_cockroach_wmgnfm.png"],
              "text": ["Вдруг из подворотни", "Страшный великан,", "Рыжий и усатый", "Та-ра-кан!", "Таракан, таракан, Тараканище!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/10_cockroach_hgcqmv.png"],
              "text": ["Он рычит, и кричит,", "И усами шевелит:", "Погодите, не спешите,", "Я вас мигом проглочу!", "Проглочу, проглочу, не помилую."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/11_cockroach_jw8hd6.png"],
              "text": ["Звери задрожали,", "В обморок упали."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606247/cockroach/12_cockroach_e4xknq.png"],
              "text": ["Волки от испуга", "Скушали друг друга."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/13_cockroach_fkxdd4.png"],
              "text": ["Бедный крокодил", "Жабу проглотил."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/14_cockroach_pganl8.png"],
              "text": ["А слониха, вся дрожа,", "Так и села на ежа."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/15_cockroach_p4s7zh.png"],
              "text": ["Только раки-забияки", "Не боятся бою-драки;", "Хоть и пятятся назад,", "Но усами шевелят", "И кричат великану усатому:"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/16_cockroach_gcjnjc.png"],
              "text": ["Не кричи и не рычи,", "Мы и сами усачи,", "Можем мы и сами", "Шевелить усами!", "И назад еще дальше", "попятились."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/17_cockroach_rhag14.png"],
              "text": ["И сказал Гиппопотам...", "Крокодилам и китам:", "Кто злодея не боится", "И с чудовищем сразиться,", "Я тому богатырю", "Двух лягушек подарю", "И еловую шишку пожалую!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/18_cockroach_hvycso.png"],
              "text": ["Не боимся мы его,", "Великана твоего:", "Мы зубами,", "Мы клыками,", "Мы копытами его!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606248/cockroach/19_cockroach_cq7bqv.png"],
              "text": ["И веселою гурьбой", "Звери кинулися в бой."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/20_cockroach_pdnlby.png"],
              "text": ["Но, увидев усача", "(Ай-ай-ай!),", "Звери дали стрекоча", "(Ай-ай-ай!).", "По лесам, по полям разбежалися:", "Тараканьих усов испугалися."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/21_cockroach_cqqiiz.png"],
              "text": ["И вскричал Гиппопотам:", "Что за стыд, что за срам!", "Эй, быки и носороги,", "Выходите из берлоги:", "И врага", "На рога", "Поднимите-ка!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/22_cockroach_vfxhht.png"],
              "text": ["Но быки и носороги", "Отвечают из берлоги:", "Мы врага бы", "На рога бы,", "Только шкура дорога,", "И рога нынче тоже не дешевы"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/23_cockroach_ambt93.png"],
              "text": ["И сидят и дрожат под кусточками,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/24_cockroach_myweqi.png"],
              "text": ["За болотными прячутся кочками."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/25_cockroach_yazdr2.png"],
              "text": ["Крокодилы в крапиву забилися,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/26_cockroach_iq6ze5.png"],
              "text": ["И в канаве слоны схоронилися."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/27_cockroach_ok0ajn.png"],
              "text": ["Только и слышно, как зубы стучат,", "Только и видно, как уши дрожат."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/28_cockroach_yb8yxe.png"],
              "text": ["А лихие обезьяны", "Подхватили чемоданы", "И скорее со всех ног", "Наутек."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/29_cockroach_c7sklf.png"],
              "text": ["И акула", "Увильнула,", "Только хвостиком махнула.", "А за нею каракатица -", "Так и пятится,", "Так и пятится."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606249/cockroach/30_cockroach_ugtjv3.png"],
              "text": ["Часть вторая:", "Вот и стал Таракан победителем,", "И лесов и полей повелителем.", "Покорилися звери усатому", "(Чтоб ему провалиться, проклятому!)."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/31_cockroach_u2ihnd.png"],
              "text": ["А он между ними похаживает,", "Золоченое брюхо поглаживает:", "Принесите-ка мне, звери, ваших детушек,", "Я сегодня их за ужином скушаю!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/32_cockroach_c5rnmv.png"],
              "text": ["Бедные, бедные звери!", "Воют, рыдают, ревут!", "В каждой берлоге,", "В каждой пещере", "Злого обжору клянут."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/33_cockroach_zmnu1x.png"],
              "text": ["Да и какая же мать", "Согласится отдать", "Своего дорогого ребенка -", "Медвежонка, волчонка, слоненка,", "Чтобы ненасытное чучело", "Бедную крошку замучило!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/34_cockroach_fnne7y.png"],
              "text": ["Плачут они, убиваются,", "С малышами навеки прощаются."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/35_cockroach_uoxpsu.png"],
              "text": ["Но однажды поутру", "Прискакала кенгуру.", "Увидала усача,", "Закричала сгоряча:"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/36_cockroach_jxswbp.png"],
              "text": ["Разве это великан?", "(Ха-ха-ха!)", "Это просто таракан!", "(Ха-ха-ха!)", "Таракан, таракан, таракашечка,", "Жидконогая козявочка-букашечка.", "И не стыдно вам?", "Не обидно вам?"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/37_cockroach_fax7np.png"],
              "text": ["Вы - зубастые,", "Вы - клыкастые,", "А малявочке", "Поклонилися,", "А козявочке", "Покорилися!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/38_cockroach_h2h3pk.png"],
              "text": ["Испугались бегемоты,", "Зашептали: Что ты, что ты!", "Уходи-ка ты отсюда!", "Как бы не было нам худа!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606250/cockroach/39_cockroach_yjlo96.png"],
              "text": ["Только вдруг из-за кусточка,", "Из-за синего лесочка,", "Из далеких из полей", "Прилетает воробей.", "Прыг да прыг", "Да чик-чирик,", "Чики-рики-чик-чирик!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/40_cockroach_qu8dzm.png"],
              "text": ["Взял и клюнул Таракана-", "Вот и нету великана.", "Поделом великану досталося,", "И усов от него не осталося."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/41_cockroach_qo92qg.png"],
              "text": ["То-то рада, то-то рада", "Вся звериная семья,", "Прославляют, поздравляют", "Удалого Воробья!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/42_cockroach_ic88o9.png"],
              "text": ["Ослы ему славу по нотам поют,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/43_cockroach_jqlvun.png"],
              "text": ["Козлы бородою дорогу метут,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/44_cockroach_lxa1xo.png"],
              "text": ["Бараны, бараны", "Стучат в барабаны!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/45_cockroach_dzxfml.png"],
              "text": ["Сычи-трубачи", "Трубят!", "Грачи с каланчи", "Кричат!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/46_cockroach_uokoyd.png"],
              "text": ["Летучие мыши", "На крыше", "Платочками машут", "И пляшут."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/47_cockroach_zxjfhh.png"],
              "text": ["А слониха-щеголиха", "Так отплясывает лихо,", "Что румяная луна", "В небе задрожала"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606251/cockroach/48_cockroach_tpa9qr.png"],
              "text": ["И на бедного слона", "Кубарем упала."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606252/cockroach/49_cockroach_iipgvs.png"],
              "text": ["Вот была потом забота-", "За луной нырять в болото"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606252/cockroach/50_cockroach_nkxeff.png"],
              "text": ["И гвоздями к небесам приколачивать!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606252/cockroach/51_cockroach_rdg0qn.png"],
              "text": ["Конец"]
            }
          ]', 'художник П. Репин'
        )
      `,
    );
  }

  public async down(): Promise<void> {}
}
