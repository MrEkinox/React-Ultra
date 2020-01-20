using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Ultra.RNReactUltra
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactUltraModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactUltraModule"/>.
        /// </summary>
        internal RNReactUltraModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactUltra";
            }
        }
    }
}
