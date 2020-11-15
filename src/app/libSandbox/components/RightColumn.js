/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React from 'react';
import { Button, Text } from '@adobe/react-spectrum';
import Draw from '@spectrum-icons/workflow/Draw';
import { useHistory } from 'react-router-dom';
import NAMED_ROUTES from '../../constants';

export default ({ templateLocation, isLatestTemplate }) => {
  const history = useHistory();

  return (
    <div className="description-container">
      <p>Welcome to the Library Sandbox. In this page you can test your library logic.</p>

      {templateLocation === 'sandbox' ? (
        <>
          <p>
            In the left pane of the page you can see a default template that is loaded inside an
            IFRAME element. The template represents a simple page that loads an empty Launch
            library.
          </p>
          <p>
            You can customize the template to support your use cases if needed. You can run the
            command <strong>`npx @adobe/reactor-sandbox init`</strong> inside your extension folder.
            You can then edit the file created at the following location:
            `.sandbox/libSandbox.html`. Next time when you refresh the sandbox page iniside the
            browser, the new content will be shown inside the IFRAME.
          </p>
          <p>
            For more informations about the `init` command you can check the{' '}
            <a
              href="https://www.npmjs.com/package/@adobe/reactor-sandbox#configuring-the-sandbox"
              rel="noreferrer"
              target="_blank"
            >
              documentation
            </a>{' '}
            .
          </p>
          <p>You can configure extensions, data elements or rules by using the Library Editor.</p>

          <Button
            variant="cta"
            onPress={() => {
              history.push(NAMED_ROUTES.LIB_SANDBOX_RULES_EDITOR);
            }}
          >
            <Draw />
            <Text>Go to Library Editor</Text>
          </Button>
        </>
      ) : null}

      {isLatestTemplate === false ? (
        <p>
          It seems there is a problem with your template. Follow the steps listed in the left pane
          of the page in order to contiune.
        </p>
      ) : null}

      {templateLocation === 'extension' && isLatestTemplate ? (
        <>
          <p>
            You can customize the template that is loaded in the left pane of the page by editing
            the file found at the following location: `.sandbox/libSandbox.html`.
          </p>

          <p>
            You can edit the information about saved rules, data elements, and extension
            configuration by using the Library Editor.
          </p>

          <Button
            variant="cta"
            onPress={() => {
              history.push(NAMED_ROUTES.LIB_SANDBOX_RULES_EDITOR);
            }}
          >
            <Draw />
            <Text>Go to Library Editor</Text>
          </Button>
        </>
      ) : null}
    </div>
  );
};
