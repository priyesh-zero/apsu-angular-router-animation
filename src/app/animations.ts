import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
  } from '@angular/animations';

export const animation = trigger('routerAnimation', [
    transition('1 => 2', [
      query(
        ':enter,:leave',
        [style({ position: 'absolute', width: '100%',height: '100vh'  })],
        { optional: true }
      ),
      group([
        query(
            ':leave',
             [style({ left: 0 }), animate('0.9s', style({ left: '-100%' }))],
            { optional: true }
          ),
          query(
            ':enter',
            [style({ left: '100%' }), animate('0.9s', style({ left: 0 }))],
            { optional: true }
          )
      ])
    ]),
    transition('2 => 1', [
        query(
          ':enter,:leave',
          [style({ position: 'absolute', width: '100%',height: '100vh'  })],
          { optional: true }
        ),
        group([
          query(
              ':leave',
               [style({ left: 0 }), animate('0.9s', style({ left: '100%' }))],
              { optional: true }
            ),
            query(
              ':enter',
              [style({ left: '-100%' }), animate('0.9s', style({ left: 0 }))],
              { optional: true }
            )
        ])
      ]),
      transition('0 => 1', [
          query(
            ':enter,:leave',
            [style({ position: 'absolute', width: '100%', height: '100vh', marginTop: '3rem' })],
            { optional: true }
          ),
          group([
            query(
                ':leave',
                 [style({ top: 0 }), animate('0.9s', style({ top: '-100%' }))],
                { optional: true }
              ),
              query(
                ':enter',
                [style({ top: '100%' }), animate('0.9s', style({ top: 0 }))],
                { optional: true }
              )
          ])
        ]),
        transition('1 => 0', [
          query(
            ':enter,:leave',
            [style({ position: 'absolute', width: '100%', height: '100vh', marginTop: '3rem' })],
            { optional: true }
          ),
          group([
            query(
                ':leave',
                 [style({ top: 0 }), animate('0.9s', style({ top: '100%' }))],
                { optional: true }
              ),
              query(
                ':enter',
                [style({ top: '-100%' }), animate('0.9s', style({ top: 0 }))],
                { optional: true }
              )
          ])
        ]),
  ])