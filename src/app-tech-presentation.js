// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Code,
  Deck,
  ListItem,
  Link,
  Text,
  SlideSet,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Heading from './theme/Heading';
import CodePane from './theme/CodePane';
import List from './theme/List';
import Slide from './theme/Slide';

import * as snippets from './assets/snippets';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#FCFAFD',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    headingText: '#5821A2',
    bodyText: 'rgb(74, 74, 74)'
  },
  {
    primary: 'Nutmeg Light',
    secondary: 'Helvetica',
  }
);

theme.screen.progress.pacman.pacmanBottom.background = '#FFEE00';
theme.screen.progress.pacman.pacmanTop.background = '#FFEE00';
theme.screen.progress.pacman.point.borderColor =  '#FFEE00';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <SlideSet transition={['zoom']}  bgColor="primary">
          <Slide>
            <Heading size={1} fit lineHeight={1} textColor="headingText">
            Dation Onderweg
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary">
            Technical stuff
            </Text>
          </Slide>
          <Slide bgColor="secondary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Topics</Heading>
            <List>
              <ListItem>Navigation</ListItem>
              <ListItem>Authentication</ListItem>
              <ListItem>State management</ListItem>
              <ListItem>Translations</ListItem>
              <ListItem>Testing and mocking</ListItem>
            </List>
          </Slide>
        </SlideSet>
        {/* NAVIGATION  */}
        <SlideSet>
          <Slide bgColor="secondary" textColor="tertiary">
            <Heading size={1} fit lineHeight={1} textColor="headingText">Navigation</Heading>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">
              Navigation stacks
            </Heading>
            <Text>The navigators are build with <Link href="https://reactnavigation.org/" target="_blank">React Navigation</Link></Text>
            <Text>
              Each screen has its own <Link href="https://reactnavigation.org/docs/en/stack-navigator.html" target="_blank" external>navigation stack</Link>.
              A stack provides a way for the app to transition between screens where each new screen is placed on top of a stack.
            </Text>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Defining a stack
            </Heading>
            <div><CodePane lang="jsx" source={snippets.navigation.navigationstack} /></div>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Render a stack
            </Heading>
            <Text>Stack are rendered in a <Code>Navigator</Code> component</Text>
            <div><CodePane lang="jsx" source={snippets.navigation.bottomnavigator} /></div>
          </Slide>


          <Slide bgColor="primary">
            <Heading size={2} lineHeight={1} textColor="headingText">
              Navigating between screens
            </Heading>
            <Text>Screen components have a <Code>navigation</Code> prop</Text>
            <Text textSize="smaller">you can use this to navigate between screens</Text>
            <div><CodePane lang="jsx" source={snippets.navigation.navigationprop} /></div>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Passing parameters
            </Heading>
            <Text>You can pass navigation parameters</Text>
            <Text textSize="smaller">similar to URL parameters when navigating between screens.</Text>
            <div><CodePane lang="jsx" source={snippets.navigation.setparams} /></div>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Passing parameters
            </Heading>
            <Text>Get parameter defined in the previous `.navigate()` call</Text>
            <div><CodePane lang="jsx" source={snippets.navigation.getparams} /></div>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Going back in history
            </Heading>
            <Text>React Navigation provides a <Code>.goBack()</Code> method.
            It does not work as the familiar <Code>window.history.back()</Code> we all know from browser land.</Text>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Back in history
            </Heading>
            <Text>Assume the following screen Structure</Text>
            <CodePane source={snippets.navigation.screenstructure} />
          </Slide>

          <Slide textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">
              Back in history
            </Heading>
            <List ordered>
              <ListItem>You are on 'Agenda Details'</ListItem>
              <ListItem>Navigate to 'Student Details'</ListItem>
              <ListItem>Call <Code>navigation.navigate.goBack();</Code></ListItem>
            </List>
            <CodePane source={snippets.navigation.screenstructure} />
            <Text>Instead of going to 'Student Details' you'll end up on 'Students'</Text>
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">
              Back in history
            </Heading>
            <Text>Fix this by adding a navigation key</Text>
            <CodePane lang="jsx" source={snippets.navigation.navigationkey} />
          </Slide>
        </SlideSet>
        {/* END NAVIGATION  */}


        {/* AUTHENTICATION */}
        <SlideSet>
          <Slide>
            <Heading size={1} fit lineHeight={1} textColor="headingText">Authentication</Heading>
          </Slide>

          <Slide textColor="bodyText">
            <Heading size={2} lineHeight={1} textColor="headingText">Basic flow</Heading>
            <List>
              <ListItem padding={5}>The user opens the app</ListItem>
              <ListItem padding={5}>Authentication state is loaded from persistent storage</ListItem>
              <ListItem padding={5}>When state has loaded, user is presented with either authentication screen or the main app, depending on whether valid authentication state was loaded</ListItem>
              <ListItem padding={5}>User signs out, authentication state is cleared and user is send to authentication screens</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">Load state</Heading>
            <CodePane lang="jsx" source={snippets.auth.authloading} />
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">Token invalidation</Heading>
            <CodePane lang="jsx" source={snippets.auth.tokenInvalidation} />
          </Slide>

          <Slide>
            <Heading size={2} lineHeight={1} textColor="headingText">Clear state</Heading>
            <CodePane lang="jsx" source={snippets.auth.clearState} />
          </Slide>

        </SlideSet>
        {/* END AUTHENTICATION */}



        {/* STATE MANAGEMENT */}
        <SlideSet>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={1} fit lineHeight={1} textColor="headingText">
              State management
            </Heading>
            <Text>with  React's <Code>context</Code> API and custom hooks</Text>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Context provider</Heading>
            <div><CodePane lang="jsx" source={snippets.hooks.provider} /></div>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Consume the context</Heading>
            <div><CodePane lang="jsx" source={snippets.hooks.consumer} /></div>
            <Text>The <Code>StudentsScreen</Code> component depends on the <Code>Students.Provider</Code> context</Text>
          </Slide>

        </SlideSet>
        {/* END STATE MANAGEMENT */}


        {/* TRANSLATIONS */}
        <SlideSet>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={1} fit lineHeight={1} textColor="headingText">
              Translations
            </Heading>
            <Text>Translations are build with <Link href="https://react.i18next.com" target="_blank">react-i18next</Link></Text>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Creating a translation</Heading>
            <Text>Create a <Code>locale.json</Code></Text>
            <div><CodePane lang="jsx" source={snippets.translations.localejson} /></div>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Export it as a resource</Heading>
            <div><CodePane lang="jsx" source={snippets.translations.localesjs} /></div>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Variables and plurals are supported</Heading>
            <div><CodePane lang="jsx" source={snippets.translations.localeWithPluralsjson} /></div>
            <br />
            <div><CodePane lang="jsx" source={snippets.translations.localeWithPluralsjs} /></div>
          </Slide>
        </SlideSet>
        {/* END TRANSLATIONS */}


        {/* TESTING AND MOCKING */}
        <SlideSet>
          <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={1} fit lineHeight={1} textColor="headingText">
              Testing and mocking
            </Heading>
            <Text></Text>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Running tests</Heading>
            <div><CodePane lang="jsx" source={'[user@machine~]$  npm run test'} /></div>
          </Slide>
          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Code coverage</Heading>
            <Text>Generate code coverage report</Text>
            <div><CodePane lang="jsx" source={'[user@machine~]$  npm run test:coverage'} /></div>
            <br />
            <Text>and upload to Sonar-Cube with sonar-scanner</Text>
            <div><CodePane lang="jsx" source={'[user@machine~]$  sonar-scanner'} /></div>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Writing tests</Heading>
            <Text>Jest is used as a test runner</Text>
            <Text>Put spec files in  <Code>my-component/__tests__</Code> <br />Jest automatically finds the spec files</Text>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Mocking</Heading>
            <Text>Tests do not run on a native device, so we need to provide mock API's to the code under test</Text>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Mocking node modules</Heading>
            <Text>Create a mock file in <Code>__mocks__</Code></Text>
            <Text>The filename has to match the import statement</Text>
            <div><CodePane lang="jsx" source={snippets.testing.nodeModuleMock} /></div>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={2} lineHeight={1} textColor="headingText">Mocking our own modules</Heading>
            <div><CodePane lang="jsx" source={snippets.testing.createFetch} /></div>
            <br />
            <div><CodePane lang="jsx" source={snippets.testing.customModuleMock} /></div>
          </Slide>
        </SlideSet>
        {/* END TESTING AND MOCKING */}

        {/* READ THE DOCS */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="headingText">
              Read the docs
          </Heading>
          <Text>They are provided in the repo under <Code>/DOCS</Code></Text>
        </Slide>
        {/*END READ THE DOCS */}

      </Deck>
    );
  }
}
