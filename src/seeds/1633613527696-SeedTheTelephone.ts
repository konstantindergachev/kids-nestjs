import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1633613527696 implements MigrationInterface {
  name = 'SeedDb1633613527696';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tales"
       (slug, title, description, couplets, artist) VALUES
       (
         'the-telephone', 'телефон', 'детская сказка про телефон', '[
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606284/thetelephone/1_the_t_wkpxul.png"],
              "text": ["Телефон"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/2_the_t_aqsgfj.png"],
              "text": ["У меня зазвонил телефон.", "– Кто говорит?", "– Слон.", "– Откуда?", "– От верблюда.", "– Что вам надо?", "– Шоколада.", "– Для кого?", "– Для сына моего.", "– А много ли прислать?", "– Да пудов этак пять", "Или шесть:", "Больше ему не съесть,", "Он у меня еще маленький!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606284/thetelephone/3_the_t_ehysi8.png"],
              "text": ["А потом позвонил", "Крокодил", "И со слезами просил:", "– Мой милый, хороший,", "Пришли мне калоши,", "И мне, и жене, и Тотоше.", "– Постой, не тебе ли", "На прошлой неделе", "Я выслал две пары", "Отличных калош?", "– Ах, те, что ты выслал", "На прошлой неделе,", "Мы давно уже съели", "И ждем, не дождёмся,", "Когда же ты снова пришлёшь", "К нашему ужину", "Дюжину", "Новых и сладких калош!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/4_the_t_pte8nz.png"],
              "text": ["А потом позвонили зайчатки:", "– Нельзя ли прислать перчатки?—", "А потом позвонили мартышки:", "– Пришлите, пожалуйста, книжки!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/5_the_t_spl6it.png"],
              "text": ["А потом позвонил медведь", "Да как начал, как начал реветь.", "– Погодите, медведь, не ревите,", "Объясните, чего вы хотите? —", "Но он только МУ да МУ,", "А к чему, почему —", "Не пойму!", "– Повесьте, пожалуйста, трубку!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/6_the_t_kodabf.png"],
              "text": ["А потом позвонили цапли:", "– Пришлите, пожалуйста, капли:", "Мы лягушками нынче объелись,", "И у нас животы разболелись!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/7_the_t_hbcrra.png"],
              "text": ["А потом позвонила свинья:", "– Пришлите ко мне соловья.", "Мы сегодня вдвоём", "С соловьём", "Чудесную песню", "Споём.", "—Нет, нет! Соловей", "Не поёт для свиней!", "Позови-ка ты лучше ворону!", "И снова медведь:", "– О, спасите моржа!", "Вчера проглотил он морского ежа!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/8_the_t_axqpys.png"],
              "text": ["И такая дребедень", "Целый день:", "Динь-ди-лень,", "Динь-ди-лень,", "Динь-ди-лень!", "То тюлень позвонит, то олень.", "А недавно две газели", "Позвонили и запели:", "– Неужели", "В самом деле", "Все сгорели", "Карусели?", "– Ах, в уме ли вы, газели?", "Не сгорели карусели,", "И качели уцелели!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/9_the_t_em3c3t.png"],
              "text": ["Вы б, газели, не галдели,", "А на будущей неделе", "Прискакали бы и сели", "На качели-карусели!—"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/10_the_t_xje1pi.png"],
              "text": ["Но не слушали газели", "И по-прежнему галдели:", "– Неужели", "В самом деле", "Все качели", "Погорели?—", "Что за глупые газели!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/11_the_t_x1fmts.png"],
              "text": ["А вчера поутру", "Кенгуру:", "– Не это ли квартира", "Мойдодыра? —", "Я рассердился, да как заору:", "– Нет! Это чужая квартира!", "– А где Мойдодыр?", "– Не могу вам сказать…", "Позвоните по номеру сто двадцать пять."]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606286/thetelephone/12_the_t_div9bj.png", "https://res.cloudinary.com/nephewfedor/image/upload/v1633606286/thetelephone/13_the_t_ialhfa.png"],
              "text": ["Я три ночи не спал,", "Я устал.", "Мне бы заснуть,", "Отдохнуть…", "Но только я лёг —", "Звонок!", "– Кто говорит?", "– Носорог"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606285/thetelephone/14_the_t_idtjpg.png"],
              "text": ["– Что такое?", "– Беда! Беда!", "Бегите скорее сюда!", "– В чём дело?", "– Спасите!", "– Кого?", "– Бегемота!", "Наш бегемот провалился в болото…", "– Провалился в болото?", "– Да!", "И ни туда, ни сюда!", "О, если вы не придёте,", "Он утонет, утонет в болоте,", "Умрёт, пропадёт", "Бегемот!!!", "– Ладно! Бегу! Бегу!", "Если могу, помогу!"]
            },
            {
              "images": ["https://res.cloudinary.com/nephewfedor/image/upload/v1633606286/thetelephone/15_the_t_nz8bbq.png"],
              "text": ["Ох, нелёгкая это работа —", "Из болота тащить бегемота!"]
            }
          ]', 'художник В. Конашевич'
        )
      `,
    );
  }

  public async down(): Promise<void> {}
}
