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

import { loadIframe } from '@adobe/reactor-bridge';
import defaultOpenCodeEditor from '../extensionBridgeComponents/openCodeEditor';
import defaultOpenRegexTester from '../extensionBridgeComponents/openRegexTester';
import defaultOpenDataElementSelector from '../extensionBridgeComponents/openDataElementSelector';

const buildExtensionViewUrl = ({ extensionDescriptor, selectedDescriptor: { descriptor } }) => {
  let src;

  if (descriptor.viewPath) {
    src =
      `${window.EXPRESS_PUBLIC_URL}/extensionViews/${extensionDescriptor.name}/` +
      `${extensionDescriptor.version}/${descriptor.viewPath}`;
  } else {
    src = `${window.EXPRESS_PUBLIC_URL}/noConfigIFrame.html`;
  }

  return src;
};

let id = 0;

export default ({
  selectedDescriptor,
  extensionDescriptor,
  parentContainerRef,
  openCodeEditor = defaultOpenCodeEditor,
  openRegexTester = defaultOpenRegexTester,
  openDataElementSelector = defaultOpenDataElementSelector,
  initInfo = {}
}) => {
  if (!selectedDescriptor || !extensionDescriptor) {
    return null;
  }

  // eslint-disable-next-line no-param-reassign
  parentContainerRef.current.innerHTML = '';

  const iframe = document.createElement('iframe');
  iframe.src = buildExtensionViewUrl({ selectedDescriptor, extensionDescriptor });
  iframe.setAttribute(
    'sandbox',
    'allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
  );

  const newBridge = loadIframe({
    iframe,
    extensionInitOptions: initInfo,
    openCodeEditor,
    openRegexTester,
    openDataElementSelector: openDataElementSelector(extensionDescriptor)
  });

  id += 1;
  newBridge.id = id;

  parentContainerRef.current.appendChild(iframe);

  return newBridge;
};
