import type { Circuit, Program } from '../types'

function circuit(c: Circuit): Circuit {
  return c
}

export function buildSeedProgram(): Program {
  return {
    id: 'programme-1',
    name: 'Programme Maman',
    sessions: [
      {
        id: 'mardi',
        name: 'Mardi — Mobilité + ceinture pelvienne',
        circuits: [
          circuit({
            id: 'm-mar-c1',
            name: 'Mobilité',
            tours: 3,
            repos: 60,
            exercises: [
              {
                id: 'm-mar-1',
                name: 'Contraction + assouplissement bras tendu',
                reps: '5 x (5s/5s) / bras',
                note: 'Bras tendu devant toi : contracte 5s puis relâche/étire 5s, alterne par bras.',
              },
              {
                id: 'm-mar-2',
                name: 'Circle',
                reps: '6',
                note: "Allongé au sol, trace un grand cercle avec le bras en cherchant l'amplitude max : va devant puis repars derrière, rotation du poignet à 180° au milieu.",
              },
              {
                id: 'm-mar-3',
                name: 'Squat profond',
                reps: '30-45s',
                unit: 'secondes',
                note: 'Descends en squat complet et reste en bas, dos droit, le temps indiqué.',
              },
            ],
          }),
          circuit({
            id: 'm-mar-c2',
            name: 'Renfo + Prévention',
            tours: 3,
            repos: 120,
            intensite: 'RPE 7',
            exercises: [
              {
                id: 'm-mar-4',
                name: 'Dead bug',
                reps: '12',
                note: 'Allongé sur le dos, bas du dos plaqué au sol, étends bras et jambe opposés en alternance.',
              },
              {
                id: 'm-mar-5',
                name: 'Superman',
                reps: '20-30s',
                unit: 'secondes',
                note: 'Ventre au sol, lève bras et jambes tendus et maintiens.',
              },
              {
                id: 'm-mar-6',
                name: 'Palof OH 1 jambe',
                reps: '6/côté',
                note: 'Palof press en équilibre sur une jambe, bras au-dessus de la tête, résiste à la rotation.',
              },
              {
                id: 'm-mar-7',
                name: 'Farmer carry',
                reps: '20m/côté',
                note: 'Marche en portant une charge lourde, garde le dos droit.',
              },
              {
                id: 'm-mar-8',
                name: 'Tirage horizontal',
                reps: '16-20/côté',
                note: "Rowing classique (élastique ou poulie), coudes vers l'arrière.",
              },
            ],
          }),
        ],
      },
      {
        id: 'jeudi',
        name: 'Jeudi — Prévention full body + Renfo triceps',
        circuits: [
          circuit({
            id: 'm-jeu-c1',
            name: 'Renfo + Prévention',
            tours: 3,
            repos: 180,
            intensite: 'RPE 7-8',
            exercises: [
              {
                id: 'm-jeu-1',
                name: 'Pistol squat banc',
                reps: '6/côté',
                note: 'Squat une jambe assisté par le banc.',
              },
              {
                id: 'm-jeu-2',
                name: 'Pompes excentrique',
                reps: '6-10',
                note: 'Pompes en ralentissant la descente au maximum.',
              },
              {
                id: 'm-jeu-3',
                name: 'Ponté pelvien + abduction',
                reps: '12',
                note: 'Pont fessier au sol, écarte les genoux (élastique) en haut du mouvement.',
              },
              {
                id: 'm-jeu-4',
                name: 'Extension triceps',
                reps: '10',
                note: 'Extension du coude en charge (haltère ou élastique), cible le triceps.',
              },
              {
                id: 'm-jeu-5',
                name: 'OH squat avec élastique',
                reps: '8-12',
                note: 'Squat bras tendus au-dessus de la tête, élastique placé autour des genoux.',
              },
              {
                id: 'm-jeu-6',
                name: 'Bird dog',
                reps: '6/côté',
                note: 'Quadrupédie, étends bras et jambe opposés en gardant le dos stable.',
              },
            ],
          }),
        ],
      },
      {
        id: 'samedi',
        name: 'Samedi — Mobilité + renfo full body',
        circuits: [
          circuit({
            id: 'm-sam-c1',
            name: 'Mobilité',
            tours: 3,
            repos: 90,
            exercises: [
              {
                id: 'm-sam-1',
                name: 'Cars assis',
                reps: '6/côté',
                note: "Rotation articulaire contrôlée de la hanche, assis : cherche l'amplitude max dans tous les sens.",
              },
              {
                id: 'm-sam-2',
                name: 'IYT',
                reps: '6',
                note: "Ventre au sol, lève bras et jambe ensemble en 3 positions : vers l'arrière, puis en croix (T), puis en Y devant toi, et reviens.",
              },
              {
                id: 'm-sam-3',
                name: 'Pigeon pose dynamique',
                reps: '8/côté',
                note: "Posture du pigeon en mouvement répété, cherche l'amplitude max à chaque répétition.",
              },
            ],
          }),
          circuit({
            id: 'm-sam-c2',
            name: 'Renfo + Prévention',
            tours: 3,
            repos: 120,
            intensite: 'RPE 8-9',
            exercises: [
              {
                id: 'm-sam-4',
                name: 'Step back élastique',
                reps: '12/côté',
                note: "Debout sur un banc, descends une jambe jusqu'à toucher le sol en contrôlant un maximum la descente, puis remonte.",
              },
              {
                id: 'm-sam-5',
                name: 'Reverse nordic curl',
                reps: '10',
                note: 'À genoux, bascule en arrière en gardant le corps droit, freine avec les cuisses.',
              },
              {
                id: 'm-sam-6',
                name: 'Thruster haltère',
                reps: '10',
                note: 'Squat complet enchaîné avec une poussée des haltères au-dessus de la tête.',
              },
              {
                id: 'm-sam-7',
                name: 'Bar au front',
                reps: '8-12',
                note: 'Allongé, descends la barre vers le front (extension triceps).',
              },
            ],
          }),
        ],
      },
      {
        id: 'etirements',
        name: 'Étirements (quand tu veux)',
        circuits: [
          circuit({
            id: 'etir-c1',
            name: 'Étirements complets',
            tours: 1,
            repos: 0,
            exercises: [
              {
                id: 'etir-1',
                name: 'Pectoraux',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Bras plié, coude contre le mur à hauteur d\'épaule, tourne le buste vers l\'opposé pour étirer.',
              },
              {
                id: 'etir-2',
                name: 'Triceps',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Bras au-dessus de la tête, coude plié, main derrière la nuque, pousse doucement avec l\'autre main.',
              },
              {
                id: 'etir-3',
                name: 'Grand dorsal',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Bras en rotation externe à 90°, main posée contre le mur, descends le buste.',
              },
              {
                id: 'etir-4',
                name: 'Lombaires',
                reps: '30',
                unit: 'secondes',
                note: "Posture de l'enfant (child pose).",
              },
              {
                id: 'etir-5',
                name: 'Fessiers',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Pied posé au-dessus de la cuisse opposée, tire la jambe vers toi.',
              },
              {
                id: 'etir-6',
                name: 'Piriforme',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Même principe mais pied au-dessus du genou opposé.',
              },
              {
                id: 'etir-7',
                name: 'Ischio-jambiers',
                reps: '30/côté',
                unit: 'secondes',
                note: "Une jambe pliée (pied au niveau de l'adducteur), l'autre jambe tendue, cherche à atteindre le pied.",
              },
              {
                id: 'etir-8',
                name: 'Adducteurs',
                reps: '30',
                unit: 'secondes',
                note: 'Papillon : plantes de pieds jointes, genoux qui descendent vers le sol.',
              },
              {
                id: 'etir-9',
                name: 'Pigeon pose',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Posture du pigeon (hanche/fessier).',
              },
              {
                id: 'etir-10',
                name: 'Mollets',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Debout, une jambe part loin derrière, talon au sol.',
              },
              {
                id: 'etir-11',
                name: 'Quadriceps',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Assis, une jambe pliée en arrière (pied à côté de la hanche), buste droit, pas de bascule en arrière.',
              },
              {
                id: 'etir-12',
                name: 'Psoas (fléchisseurs de hanche)',
                reps: '30/côté',
                unit: 'secondes',
                note: 'Fente, genou arrière au sol, avance le bassin en gardant le dos droit, légère rotation du buste vers le côté opposé à la jambe arrière.',
              },
            ],
          }),
        ],
      },
    ],
  }
}
