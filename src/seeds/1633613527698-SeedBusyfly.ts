import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1633613527698 implements MigrationInterface {
  name = 'SeedDb1633613527698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tales"
       (slug, title, description, couplets, artist) VALUES
       (
         'busyfly', 'муха цокотуха', 'третья сказка про муху', '[
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606132/busyfly/1_bf_y5g11b.png", "https://res.cloudinary.com/nephewfedor/image/upload/v1633606147/busyfly/2_bf_krm0bd.png"],
              "text": ["Муха Цокотуха"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606147/busyfly/3_bf_raucir.png"],
              "text": ["Муха, Муха, Цокотуха,", "Позолоченное брюхо!", "Муха по полю пошла,", "Муха денежку нашла."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606147/busyfly/4_bf_svwjxd.png"],
              "text": ["Пошла Муха на базар", "И купила самовар:"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606147/busyfly/5_bf_xfinxk.png"],
              "text": ["Приходите, тараканы,", "Я вас чаем угощу!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606147/busyfly/6_bf_caifyl.png"],
              "text": ["Тараканы прибегали,", "Все стаканы выпивали,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606147/busyfly/7_bf_b8zsvv.png"],
              "text": ["А букашки -", "По три чашки", "С молоком", "И крендельком:", "Нынче Муха-Цокотуха", "Именинница!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606148/busyfly/8_bf_m2fekj.png"],
              "text": ["Приходили к Мухе блошки,", "Приносили её сапожки.", "А сапожки не простые - ", "В них застёжки золотые."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606148/busyfly/9_bf_f6erma.png"],
              "text": ["Приходила к Мухе", "Бабушка-пчела,", "Мухе-Цокотухе", "Мёду принесла..."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606148/busyfly/10_bf_eec2au.png"],
              "text": ["Бабочка-красавица,", "Кушайте варенье!", "Или вам не нравится", "Наше угощенье?"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606148/busyfly/11_bf_afefsl.png"],
              "text": ["Вдруг какой-то старичок", "Паучок", "Нашу Муху в уголок", "Поволок, -", "Хочет бедную убить,", "Цокотуху погубить!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606148/busyfly/12_bf_qjkczh.png"],
              "text": ["Дорогие гости, помогите!", "Паука-злодея зарубите!", "И кормила я вас,", "И поила я вас,", "Не покиньте меня", "В мой последний час!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/13_bf_kiwkqo.png"],
              "text": ["Но жуки-червяки", "Испугалися,", "По углам, по щелям", "Разбежалися."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/14_bf_w9fs0a.png"],
              "text": ["Тараканы", "Под диваны,", "А козявочки", "Под лавочки,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/15_bf_grdzmh.png"],
              "text": ["А букашки под кровать -", "Не желают воевать!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/16_bf_kmxjyl.png"],
              "text": ["И никто даже с места", "Не сдвинется:", "Пропадай-погибай,", "Именинница!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/17_bf_qjioev.png"],
              "text": ["А кузнечик, а кузнечик,", "Ну совсем как человечек,", "Скок, скок, скок, скок", "За кусток,", "Под мосток", "И молчок!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/18_bf_jp9wu1.png"],
              "text": ["А злодей-то не шутит,", "Руки-ноги он Мухе верёвками крутит,", "Зубы острые в самое сердце вонзает", "И кровь из неё выпивает."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/19_bf_ptzd2x.png"],
              "text": ["Муха криком кричит,", "Надрывается,", "А злодей молчит,", "Ухмыляется."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606149/busyfly/20_bf_m9ybux.png"],
              "text": ["Вдруг откуда-то летит", "Маленький Комарик,", "И в руке его горит", "Маленький фонарик."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/21_bf_jcmiaj.png"],
              "text": ["Где убийца? Где злодей?", "Не боюсь его когтей!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/22_bf_bnwm3v.png"],
              "text": ["Подлетает к Пауку,", "Саблю вынимает", "И ему на всём скаку", "Голову срубает!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/23_bf_zmieje.png"],
              "text": ["Муху за руку берёт", "И к окошечку ведёт."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/24_bf_ukifbg.png"],
              "text": ["Я злодея зарубил,", "Я тебя освободил", "И теперь, душа-вевица,", "На тебе хочу жениться!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/25_bf_wocobo.png"],
              "text": ["Тут букашки и козявки", "Выползают из-под лавки:", "Слава, слава Комару-", "Победитулю!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/26_bf_nwfmsu.png"],
              "text": ["Прибегали светляки,", "Зажигали огоньки-", "То-то стало весело,", "То-то хорошо!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606150/busyfly/27_bf_plcep9.png"],
              "text": ["Эй, сороконожки,", "Бегите по дорожке,", "Зовите музыкантов,", "Будем танцевать!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/28_bf_kwfdkj.png"],
              "text": ["Музыканты прибежали,", "В барабаны застучали.", "Бом! бом! бом! бом!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/29_bf_lviucs.png"],
              "text": ["Пляшет Муха с Комаром."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/30_bf_hzenhg.png"],
              "text": ["А за нею Клоп, Клоп", "Сапогами топ, топ!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/31_bf_umh090.png"],
              "text": ["Козявочки с червячками,", "Букашечки с мотыльками."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/32_bf_rhyvsr.png"],
              "text": ["А жуки рогатые,", "Мужики богатые,", "Шапочками машут,", "С бабочками пляшут."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/33_bf_z8wgpg.png"],
              "text": ["Тара-ра, тара-ра,", "Заплясала мошкара."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/34_bf_mjlmx4.png"],
              "text": ["Веселится народ-", "Муха замуж идёт", "За лихого, удалого,", "Молодого комара!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606151/busyfly/35_bf_iitpui.png"],
              "text": ["Муравей, Муравей", "Не жалей лаптей,-", "С Муравьихою попрыгивает", "И букашечкам подмигивает:"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606152/busyfly/36_bf_nsbvqd.png"],
              "text": ["Вы букашечки,", "Вы милашечки,", "Тара-тара-тара-тара-таракашечки!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606152/busyfly/37_bf_kvx7jo.png"],
              "text": ["Сапоги скрипят,", "Каблуки стучат,-", "Будет, будет мошкара", "Веселиться до утра,"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606152/busyfly/38_bf_kzcldn.png"],
              "text": ["Нынче Муха-Цокотуха", "Именинница!"]
            }
          ]', 'художник Б. Степанцев'
        )
      `,
    );
  }

  public async down(): Promise<void> {}
}
