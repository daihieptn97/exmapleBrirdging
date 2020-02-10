//
//  Flash.swift
//  Test123
//
//  Created by Trần Hiệp on 2/10/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit
import AVFoundation

@objc(Flash)
class Flash: NSObject {
  @objc
  func on() -> Void {
    toggleTorch(on: true)
  }
  
  @objc
  func off() -> Void {
    toggleTorch(on: false)
  }
  
  
 func toggleTorch(on: Bool) {
      guard
          let device = AVCaptureDevice.default(for: AVMediaType.video),
          device.hasTorch
      else { return }

      do {
          try device.lockForConfiguration()
          device.torchMode = on ? .on : .off
          device.unlockForConfiguration()
      } catch {
          print("Torch could not be used")
      }
  }
  
}
