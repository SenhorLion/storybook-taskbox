import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import requireContext from 'require-context.macro';
import '../src/index.css';
import { StoryLayoutContainer } from '../src/utils/StoryContainer';

addDecorator(story => (
  <>
    <StoryLayoutContainer>{story()}</StoryLayoutContainer>
  </>
));

// addDecorator(
//   withInfo({
//     styles: {
//       header: {
//         h1: {
//           marginRight: '20px',
//           fontSize: '25px',
//           display: 'inline'
//         },
//         body: {
//           paddingTop: 0,
//           paddingBottom: 0
//         },
//         h2: {
//           display: 'inline',
//           color: '#999'
//         }
//       },
//       infoBody: {
//         backgroundColor: '#eee',
//         padding: '0px 5px',
//         lineHeight: '2'
//       }
//     },
//     inline: true,
//     source: false
//   })
// );

addParameters({
  assets: [
    {
      name: 'app',
      url: '/designs/app.png'
    },
    {
      name: 'items',
      url: '/designs/items.png'
    },
    {
      name: 'list 1',
      url: '/designs/list-1.png'
    },
    {
      name: 'list 2',
      url: '/designs/list-2.png'
    }
  ]
});

const req = requireContext('../src', true, /\.stories.(js|ts|tsx|mdx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// configure(requireContext('../src', true, /\.stories.(js|ts|tsx|mdx)$/), module);
